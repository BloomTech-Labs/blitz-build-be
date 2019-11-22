
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          "id": 1,
          "baths": 1,
          "beds": 7,
          "square_ft": 3840,
          "street_address": "294 Sipes Rest",
          "city": "Moenstad",
          "state": "LA",
          "zipcode": 98839,
          "project_name": "Designer",
          "status": 2,
          "imageURL": "una.net",
          "gpsCords": [
            {
              "latitutde": "32.6784"
            },
            {
              "longitude": "-30.4438"
            }
          ],
          "projects_id": [
            13,
            22,
            5,
            1,
            28,
            12
          ]
        },
        {
          "id": 2,
          "baths": 4,
          "beds": 6,
          "square_ft": 3502,
          "street_address": "90033 Cronin Tunnel",
          "city": "Ellieland",
          "state": "NM",
          "zipcode": 77409,
          "project_name": "Executive",
          "status": 3,
          "imageURL": "caesar.biz",
          "gpsCords": [
            {
              "latitutde": "-34.6375"
            },
            {
              "longitude": "109.2034"
            }
          ],
          "projects_id": [
            11,
            30,
            13,
            11,
            26,
            9
          ]
        },
        {
          "id": 3,
          "baths": 4,
          "beds": 1,
          "square_ft": 4434,
          "street_address": "1733 Miller Gateway",
          "city": "East Bill",
          "state": "GA",
          "zipcode": 84949,
          "project_name": "Designer",
          "status": 3,
          "imageURL": "johnnie.name",
          "gpsCords": [
            {
              "latitutde": "75.5180"
            },
            {
              "longitude": "-116.0673"
            }
          ],
          "projects_id": [
            4,
            25,
            14,
            8,
            23,
            14
          ]
        },
        {
          "id": 4,
          "baths": 1,
          "beds": 3,
          "square_ft": 4281,
          "street_address": "07418 Corkery Motorway",
          "city": "New Ginohaven",
          "state": "ME",
          "zipcode": 88144,
          "project_name": "Representative",
          "status": 2,
          "imageURL": "vincenza.biz",
          "gpsCords": [
            {
              "latitutde": "78.8444"
            },
            {
              "longitude": "-153.7121"
            }
          ],
          "projects_id": [
            11,
            26,
            4,
            15,
            17,
            15
          ]
        },
        {
          "id": 5,
          "baths": 5,
          "beds": 7,
          "square_ft": 3819,
          "street_address": "92815 Kuphal Pike",
          "city": "Evangelinefort",
          "state": "OH",
          "zipcode": 82806,
          "project_name": "Agent",
          "status": 3,
          "imageURL": "kattie.name",
          "gpsCords": [
            {
              "latitutde": "56.7730"
            },
            {
              "longitude": "-46.2900"
            }
          ],
          "projects_id": [
            12,
            18,
            16,
            14,
            23,
            13
          ]
        },
        {
          "id": 6,
          "baths": 4,
          "beds": 7,
          "square_ft": 3305,
          "street_address": "3061 Torphy Fort",
          "city": "West Wellingtonfort",
          "state": "SD",
          "zipcode": 77369,
          "project_name": "Analyst",
          "status": 2,
          "imageURL": "kevon.org",
          "gpsCords": [
            {
              "latitutde": "26.4439"
            },
            {
              "longitude": "92.2269"
            }
          ],
          "projects_id": [
            5,
            28,
            11,
            7,
            25,
            8
          ]
        },
        {
          "id": 7,
          "baths": 5,
          "beds": 5,
          "square_ft": 4376,
          "street_address": "52403 Raymond Port",
          "city": "Lake Kay",
          "state": "AR",
          "zipcode": 89134,
          "project_name": "Coordinator",
          "status": 3,
          "imageURL": "phyllis.info",
          "gpsCords": [
            {
              "latitutde": "-53.6360"
            },
            {
              "longitude": "107.1774"
            }
          ],
          "projects_id": [
            3,
            30,
            21,
            2,
            20,
            8
          ]
        },
        {
          "id": 8,
          "baths": 8,
          "beds": 5,
          "square_ft": 3387,
          "street_address": "497 Ferry Inlet",
          "city": "North Brauliomouth",
          "state": "KS",
          "zipcode": 73443,
          "project_name": "Coordinator",
          "status": 2,
          "imageURL": "isabelle.biz",
          "gpsCords": [
            {
              "latitutde": "31.2088"
            },
            {
              "longitude": "15.1501"
            }
          ],
          "projects_id": [
            13,
            26,
            7,
            5,
            27,
            6
          ]
        },
        {
          "id": 9,
          "baths": 3,
          "beds": 4,
          "square_ft": 3394,
          "street_address": "033 Bailey Island",
          "city": "Pearlineville",
          "state": "NC",
          "zipcode": 84043,
          "project_name": "Strategist",
          "status": 2,
          "imageURL": "edna.com",
          "gpsCords": [
            {
              "latitutde": "-64.2951"
            },
            {
              "longitude": "-110.5121"
            }
          ],
          "projects_id": [
            3,
            23,
            2,
            13,
            22,
            5
          ]
        },
        {
          "id": 10,
          "baths": 4,
          "beds": 7,
          "square_ft": 2948,
          "street_address": "122 Pagac Mountain",
          "city": "Lake Johannamouth",
          "state": "FL",
          "zipcode": 80733,
          "project_name": "Consultant",
          "status": 3,
          "imageURL": "roel.com",
          "gpsCords": [
            {
              "latitutde": "88.2391"
            },
            {
              "longitude": "156.0680"
            }
          ],
          "projects_id": [
            3,
            15,
            25,
            2,
            26,
            14
          ]
        },
        {
          "id": 11,
          "baths": 3,
          "beds": 6,
          "square_ft": 4436,
          "street_address": "29424 Aurelie Pike",
          "city": "Lake Ettiemouth",
          "state": "KS",
          "zipcode": 86308,
          "project_name": "Coordinator",
          "status": 2,
          "imageURL": "lukas.biz",
          "gpsCords": [
            {
              "latitutde": "-44.1654"
            },
            {
              "longitude": "107.0267"
            }
          ],
          "projects_id": [
            10,
            19,
            23,
            12,
            25,
            1
          ]
        },
        {
          "id": 12,
          "baths": 7,
          "beds": 5,
          "square_ft": 3323,
          "street_address": "90134 Dolly Lodge",
          "city": "New Adalbertostad",
          "state": "OR",
          "zipcode": 83015,
          "project_name": "Assistant",
          "status": 2,
          "imageURL": "anika.name",
          "gpsCords": [
            {
              "latitutde": "39.7646"
            },
            {
              "longitude": "-67.6235"
            }
          ],
          "projects_id": [
            6,
            15,
            8,
            2,
            22,
            6
          ]
        },
        {
          "id": 13,
          "baths": 2,
          "beds": 1,
          "square_ft": 3722,
          "street_address": "15123 Zachariah Burgs",
          "city": "West Dorothea",
          "state": "UT",
          "zipcode": 96586,
          "project_name": "Orchestrator",
          "status": 2,
          "imageURL": "maye.name",
          "gpsCords": [
            {
              "latitutde": "-1.6502"
            },
            {
              "longitude": "176.3642"
            }
          ],
          "projects_id": [
            14,
            28,
            27,
            8,
            17,
            8
          ]
        },
        {
          "id": 14,
          "baths": 6,
          "beds": 5,
          "square_ft": 2830,
          "street_address": "27608 Balistreri Cape",
          "city": "Lake Candelario",
          "state": "VA",
          "zipcode": 94973,
          "project_name": "Coordinator",
          "status": 1,
          "imageURL": "enrique.net",
          "gpsCords": [
            {
              "latitutde": "57.0043"
            },
            {
              "longitude": "58.7591"
            }
          ],
          "projects_id": [
            11,
            18,
            1,
            12,
            29,
            12
          ]
        },
        {
          "id": 15,
          "baths": 5,
          "beds": 1,
          "square_ft": 2927,
          "street_address": "5849 Pat Land",
          "city": "West Jamison",
          "state": "CT",
          "zipcode": 76955,
          "project_name": "Director",
          "status": 1,
          "imageURL": "winston.org",
          "gpsCords": [
            {
              "latitutde": "19.2815"
            },
            {
              "longitude": "-143.7293"
            }
          ],
          "projects_id": [
            8,
            20,
            19,
            15,
            20,
            10
          ]
        },
        {
          "id": 16,
          "baths": 1,
          "beds": 2,
          "square_ft": 4371,
          "street_address": "441 Rolfson Hills",
          "city": "Port Wilhelm",
          "state": "IA",
          "zipcode": 87896,
          "project_name": "Engineer",
          "status": 3,
          "imageURL": "guillermo.info",
          "gpsCords": [
            {
              "latitutde": "73.7912"
            },
            {
              "longitude": "133.6609"
            }
          ],
          "projects_id": [
            3,
            20,
            16,
            7,
            26,
            9
          ]
        },
        {
          "id": 17,
          "baths": 4,
          "beds": 2,
          "square_ft": 3144,
          "street_address": "021 Keyshawn Terrace",
          "city": "Ethelbury",
          "state": "IL",
          "zipcode": 76596,
          "project_name": "Coordinator",
          "status": 1,
          "imageURL": "albina.biz",
          "gpsCords": [
            {
              "latitutde": "38.1279"
            },
            {
              "longitude": "-174.7017"
            }
          ],
          "projects_id": [
            11,
            30,
            23,
            15,
            19,
            7
          ]
        },
        {
          "id": 18,
          "baths": 8,
          "beds": 3,
          "square_ft": 3723,
          "street_address": "477 Adolph Key",
          "city": "Jazminton",
          "state": "NH",
          "zipcode": 74485,
          "project_name": "Facilitator",
          "status": 3,
          "imageURL": "alessia.info",
          "gpsCords": [
            {
              "latitutde": "-18.4464"
            },
            {
              "longitude": "-166.4239"
            }
          ],
          "projects_id": [
            1,
            16,
            26,
            5,
            25,
            13
          ]
        },
        {
          "id": 19,
          "baths": 2,
          "beds": 8,
          "square_ft": 3055,
          "street_address": "4778 Ward River",
          "city": "Lake Kareemville",
          "state": "OH",
          "zipcode": 95337,
          "project_name": "Director",
          "status": 3,
          "imageURL": "clint.net",
          "gpsCords": [
            {
              "latitutde": "-77.6003"
            },
            {
              "longitude": "62.7084"
            }
          ],
          "projects_id": [
            14,
            16,
            3,
            13,
            25,
            13
          ]
        },
        {
          "id": 20,
          "baths": 8,
          "beds": 6,
          "square_ft": 3063,
          "street_address": "6860 Borer Park",
          "city": "North Jamisonfurt",
          "state": "MI",
          "zipcode": 93276,
          "project_name": "Engineer",
          "status": 1,
          "imageURL": "grant.name",
          "gpsCords": [
            {
              "latitutde": "88.8528"
            },
            {
              "longitude": "169.5120"
            }
          ],
          "projects_id": [
            2,
            21,
            12,
            7,
            20,
            6
          ]
        },
        {
          "id": 21,
          "baths": 5,
          "beds": 8,
          "square_ft": 3238,
          "street_address": "910 Dare Divide",
          "city": "Dorotheaport",
          "state": "UT",
          "zipcode": 86064,
          "project_name": "Associate",
          "status": 3,
          "imageURL": "brain.name",
          "gpsCords": [
            {
              "latitutde": "-80.3698"
            },
            {
              "longitude": "-151.1076"
            }
          ],
          "projects_id": [
            3,
            16,
            8,
            13,
            27,
            14
          ]
        },
        {
          "id": 22,
          "baths": 2,
          "beds": 5,
          "square_ft": 3077,
          "street_address": "762 Nolan Garden",
          "city": "Maggiobury",
          "state": "IA",
          "zipcode": 89878,
          "project_name": "Executive",
          "status": 1,
          "imageURL": "hilton.biz",
          "gpsCords": [
            {
              "latitutde": "69.6800"
            },
            {
              "longitude": "-46.3581"
            }
          ],
          "projects_id": [
            8,
            25,
            29,
            9,
            30,
            2
          ]
        },
        {
          "id": 23,
          "baths": 5,
          "beds": 5,
          "square_ft": 4429,
          "street_address": "83050 Justine Ports",
          "city": "North Rosalindchester",
          "state": "ME",
          "zipcode": 84193,
          "project_name": "Representative",
          "status": 1,
          "imageURL": "jalen.biz",
          "gpsCords": [
            {
              "latitutde": "-45.0063"
            },
            {
              "longitude": "142.4449"
            }
          ],
          "projects_id": [
            8,
            18,
            14,
            13,
            24,
            1
          ]
        },
        {
          "id": 24,
          "baths": 4,
          "beds": 2,
          "square_ft": 2849,
          "street_address": "34030 Mayer Lodge",
          "city": "East Matilda",
          "state": "NC",
          "zipcode": 96085,
          "project_name": "Administrator",
          "status": 2,
          "imageURL": "blanca.biz",
          "gpsCords": [
            {
              "latitutde": "15.1852"
            },
            {
              "longitude": "-36.2305"
            }
          ],
          "projects_id": [
            14,
            24,
            24,
            1,
            25,
            8
          ]
        },
        {
          "id": 25,
          "baths": 8,
          "beds": 8,
          "square_ft": 4450,
          "street_address": "43676 Vicky Forest",
          "city": "Luciousbury",
          "state": "NM",
          "zipcode": 88424,
          "project_name": "Supervisor",
          "status": 3,
          "imageURL": "obie.org",
          "gpsCords": [
            {
              "latitutde": "-15.8561"
            },
            {
              "longitude": "145.6266"
            }
          ],
          "projects_id": [
            2,
            26,
            8,
            2,
            22,
            1
          ]
        },
        {
          "id": 26,
          "baths": 3,
          "beds": 4,
          "square_ft": 3569,
          "street_address": "22244 Dina Cape",
          "city": "Port Tyshawn",
          "state": "IL",
          "zipcode": 93051,
          "project_name": "Architect",
          "status": 1,
          "imageURL": "garrett.net",
          "gpsCords": [
            {
              "latitutde": "2.7602"
            },
            {
              "longitude": "-47.4810"
            }
          ],
          "projects_id": [
            15,
            27,
            17,
            7,
            29,
            13
          ]
        },
        {
          "id": 27,
          "baths": 2,
          "beds": 8,
          "square_ft": 3135,
          "street_address": "843 Sipes Ville",
          "city": "Ricechester",
          "state": "NM",
          "zipcode": 98731,
          "project_name": "Supervisor",
          "status": 2,
          "imageURL": "margot.com",
          "gpsCords": [
            {
              "latitutde": "-55.6416"
            },
            {
              "longitude": "31.8715"
            }
          ],
          "projects_id": [
            6,
            28,
            2,
            6,
            28,
            11
          ]
        },
        {
          "id": 28,
          "baths": 3,
          "beds": 3,
          "square_ft": 3944,
          "street_address": "448 Hackett Mountain",
          "city": "Marilieberg",
          "state": "CT",
          "zipcode": 81686,
          "project_name": "Designer",
          "status": 3,
          "imageURL": "dallin.org",
          "gpsCords": [
            {
              "latitutde": "-28.6015"
            },
            {
              "longitude": "-132.2941"
            }
          ],
          "projects_id": [
            8,
            22,
            13,
            6,
            16,
            8
          ]
        },
        {
          "id": 29,
          "baths": 3,
          "beds": 7,
          "square_ft": 4528,
          "street_address": "7204 Tillman Garden",
          "city": "Leslieton",
          "state": "RI",
          "zipcode": 92169,
          "project_name": "Planner",
          "status": 1,
          "imageURL": "silas.net",
          "gpsCords": [
            {
              "latitutde": "81.1493"
            },
            {
              "longitude": "60.4783"
            }
          ],
          "projects_id": [
            9,
            18,
            7,
            4,
            19,
            1
          ]
        },
        {
          "id": 30,
          "baths": 4,
          "beds": 3,
          "square_ft": 3738,
          "street_address": "899 Brown Spurs",
          "city": "South Keely",
          "state": "SD",
          "zipcode": 83602,
          "project_name": "Associate",
          "status": 1,
          "imageURL": "vella.org",
          "gpsCords": [
            {
              "latitutde": "-76.6446"
            },
            {
              "longitude": "34.0814"
            }
          ],
          "projects_id": [
            7,
            18,
            12,
            12,
            25,
            6
          ]
        }
     
      ]);
    });
};
