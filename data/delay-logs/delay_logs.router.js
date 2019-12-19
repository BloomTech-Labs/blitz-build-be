const router = require("express").Router();
const db = require("./delay_logs.model");
const moment = require("moment");
const tasksDB = require("../tasks/tasks.model");

/** 
 * @swagger
 *  /:
 *    get:
 *      description: Returns all tasks per user_id
 *      responses:
 *                   200:
 *                
 *              description: All logs returned
 * 
 *  
 */
router.get("/", (req, res) => {
  const user_id = req.headers.user_id;
  db.getLogsByUserId(user_id)
    .then(logs => {
      if (logs) {
        res.status(200).json(logs);
      } else {
        res.status(400).json({ message: "Sorry no logs found for that ID" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

/**
 * @swagger
 *     /:
 *      get /delay_logs/:id:
 *       description: id = delay_logs.id gets logs by delay_logs.id
 *          responses: 200 : Returns delay_logs
 *        
 * @require in @params 
 */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user_id = req.headers.user_id;

  db.getLogsByLogId(id)

    .then(log => {
      // Check if log belongs to user
      if (log[0].user_id == user_id) {
        // If so return project to client
        res.status(200).json(log);
      } else {
        // If not return error message to client
        res
          .status(401)
          .json({ message: `Log # ${id} doesn't belong to user # ${user_id}` });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting log id"
      });
    });
});


/**
 * @swagger
 * /:
 * post /delay_logs :
 *      description: Adds a new delay_log to the database
 *           required: @body = newLog
 *               responses:
 *                   200:
 *                     description: New Delay Log Created at 'date and time'
 */
router.post("/", (req, res) => {
  const newLog = req.body;
  const user_id = req.headers.user_id;
    newLog.user_id = user_id;
    newLog.createdAt = moment().format("l");
    /** check if the task_id is valid. */
  tasksDB.getTaskByTaskID(newLog.task_id).then(task => {
      if (task[0]) {
      /** check if this task belong to the project.*/
      if (task[0].project_id == newLog.project_id) {
        db.addLogs(newLog)
          .then(newLogId => {
            db.getLogsByLogId(newLogId[0]).then(log => {
              res.status(201).json({
                newLog: `New Delay Log Created at ${moment().format("LLL")}`,
                log
              });
            });
          })
          .catch(error => {
            res.status(500).json({ error: error.message });
          });
      } else {
        res
          .status(401)
          .json({
            message: `The task # ${newLog.task_id} is not belong to the project #${newLog.project_id}`
          });
      }
    } else {
      res.status(401).json({ message: "This task_id is invalid" });
    }
  });
});
/**@PUT /delay_logs/:id
 * @body = changes to update
 * 
 */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
    const user_id = req.headers.user_id;
    changes.updatedAt = moment().format("l");
  /** Get log 1st */
  db.getLogsByLogId(id)

    .then(log => {
      /** Check to see if log belongs to user */
      if (log[0].user_id == req.headers.user_id) {
        /** If so update log and send status 200 back to client */
        db.editLogs(id, changes).then(() => {
          db.getLogsByLogId(id).then(updatedLog => {
            res
              .status(200)
              .json({ message: `Log # ${id} updated`, updatedLog });
          });
        });
        /** If not send error message back to client */
      } else {
        res
          .status(401)
          .json({ message: `Log # ${id} doesn't belong to user # ${user_id}` });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on updating log"
      });
    });
});

/**@DELETE /delay_logs/:id */

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const user_id = req.headers.user_id;
  db.getLogsByLogId(id)
    .then(log => {
      if (log[0].user_id == user_id) {
        db.deleteLogs(id).then(deletedLog => {
          res.status(204).json({ message: `Log # ${id} is removed` });
        });
      } else {
        res
          .status(401)
          .json({ message: `Log # ${id} doesn't belong to user # ${user_id}` });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "server error on deleting Log"
      });
    });
});
module.exports = router;
