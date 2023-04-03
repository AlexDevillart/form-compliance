const moment = require("moment-timezone");

function getPositions(json) {

    const texts = {
        pt: [
            {
                text: json.dado1,
                page: 0,
                x: 110,
                y: 725
            },
            {
                text: json.dado2,
                page: 0,
                x: 77,
                y: 698.5
            },
            {
                text: json.q1,
                page: 1,
                x: 52,
                y: 752
            },
            {
                type: "X",
                page: 1,
                selected: json.q2,
                options: [
                    {
                        x: 46.5,
                        y: 713
                    },
                    {
                        x: 138.5,
                        y: 713
                    },
                    {
                        x: 237.5,
                        y: 713
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q3,
                options: [
                    {
                        x: 46.5,
                        y: 673.5
                    },
                    {
                        x: 107.5,
                        y: 673.5
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q4,
                options: [
                    {
                        x: 47.5,
                        y: 602.5,
                    },
                    {
                        x: 344.5,
                        y: 602.5
                    }
                ]
            },
            {
                text: json.q4_iftrue,
                page: 1,
                x: 240,
                y: 588
            },
            {
                type: "X",
                page: 1,
                selected: json.q5,
                options: [
                    {
                        x: 47.5,
                        y: 516
                    },
                    {
                        x: 344.5,
                        y: 516
                    }
                ]
            },
            {
                text: json.q5_iftrue,
                page: 1,
                x: 240,
                y: 502
            },
            {
                type: "X",
                page: 1,
                selected: json.q6,
                options: [
                    {
                        x: 47.5,
                        y: 415.5
                    },
                    {
                        x: 344.5,
                        y: 415.5
                    }
                ]
            },
            {
                text: json.q6_iftrue,
                page: 1,
                x: 240,
                y: 400.5,
            },
            {
                type: "X",
                page: 1,
                selected: json.q7,
                options: [
                    {
                        x: 47.5,
                        y: 329.5,
                    },
                    {
                        x: 344.5,
                        y: 329.5
                    }
                ]
            },
            {
                text: json.q7_iftrue,
                page: 1,
                x: 180,
                y: 314
            },
            {
                type: "X",
                page: 1,
                selected: json.q8,
                options: [
                    {
                        x: 46.5,
                        y: 269
                    },
                    {
                        x: 148.5,
                        y: 269
                    },
                    {
                        x: 296.5,
                        y: 269
                    },
                    {
                        x: 366.5,
                        y: 269
                    },
                    {
                        x: 46.5,
                        y: 254.5
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q9,
                options: [
                    {
                        x: 47.5,
                        y: 197.3
                    },
                    {
                        x: 145.3,
                        y: 197.3
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q10,
                options: [
                    {
                        x: 47.5,
                        y: 138.5
                    },
                    {
                        x: 148.3,
                        y: 138.5
                    }
                ]
            },
            {
                type: "X",
                page: 2,
                selected: json.q11,
                options: [
                    {
                        x: 47.5,
                        y: 725
                    },
                    {
                        x: 148,
                        y: 725
                    }
                ]
            },
            {
                type: "X",
                page: 2,
                selected: json.q12,
                options: [
                    {
                        x: 47.5,
                        y: 653.5,
                    },
                    {
                        x: 148,
                        y: 653.5
                    }
                ]
            },
            {
                text: json.q12_iftrue,
                page: 2,
                x: 42,
                y: 626
            },
            {
                type: "X",
                page: 2,
                selected: json.q13,
                options: [
                    {
                        x: 47.5,
                        y: 541.5
                    },
                    {
                        x: 344.8,
                        y: 541.5
                    }
                ]
            },
            {
                text: json.q13_iftrue,
                page: 2,
                x: 187,
                y: 527.5
            },
            {
                type: "X",
                page: 2,
                selected: json.q14,
                options: [
                    {
                        x: 47.5,
                        y: 468.5
                    },
                    {
                        x: 342,
                        y: 468.5
                    }
                ]
            },
            {
                text: json.q14_iftrue,
                page: 2,
                x: 187,
                y: 453.5,
            },
            {
                type: "X",
                page: 2,
                selected: json.q15,
                options: [
                    {
                        x: 47.5,
                        y: 381.5,
                    },
                    {
                        x: 342,
                        y: 381.5
                    }
                ]
            },
            {
                text: json.q15_iftrue,
                page: 2,
                x: 187,
                y: 367.5,
            },
            {
                type: "X",
                page: 2,
                selected: json.q16,
                options: [
                    {
                        x: 47.5,
                        y: 295.5
                    },
                    {
                        x: 342,
                        y: 295.5
                    }
                ]
            },
            {
                text: json.q16_iftrue,
                page: 2,
                x: 187,
                y: 281
            },
            {
                type: "X",
                page: 2,
                selected: json.q17,
                options: [
                    {
                        x: 47.5,
                        y: 236
                    },
                    {
                        x: 47.5,
                        y: 221
                    },
                    {
                        x: 47.5,
                        y: 205
                    }
                ]
            },
            {
                type: "X",
                page: 2,
                selected: json.q18,
                options: [
                    {
                        x: 47.5,
                        y: 161.5
                    },
                    {
                        x: 339.5,
                        y: 161.5
                    }
                ]
            },
            {
                text: json.q18_iftrue,
                page: 2,
                x: 45,
                y: 130,
                break: 90
            },
            {
                type: "X",
                page: 3,
                selected: json.q19,
                options: [
                    {
                        x: 47.5,
                        y: 766.5
                    },
                    {
                        x: 86.5,
                        y: 766.5
                    }
                ]
            },
            {
                text: json.q19_iftrue,
                page: 3,
                x: 42.5,
                y: 738.5,
                break: 90
            },
            {
                type: "X",
                page: 3,
                selected: json.q20,
                options: [
                    {
                        x: 47.5,
                        y: 680
                    },
                    {
                        x: 337.5,
                        y: 680
                    }
                ]
            },
            {
                text: json.q20_iftrue,
                page: 3,
                x: 45,
                y: 650,
                break: 90
            },
            {
                type: "X",
                page: 3,
                selected: json.q21,
                options: [
                    {
                        x: 47.5,
                        y: 535,
                    },
                    {
                        x: 336.5,
                        y: 535
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q22,
                options: [
                    {
                        x: 47.5,
                        y: 477.5,
                    },
                    {
                        x: 336,
                        y: 477.5
                    },
                    {
                        x: 47.5,
                        y: 462.3
                    },
                    {
                        x: 337.5,
                        y: 462.3
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q23,
                options: [
                    {
                        x: 47.5,
                        y: 404
                    },
                    {
                        x: 335,
                        y: 404
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q24,
                options: [
                    {
                        x: 47.5,
                        y: 332.7
                    },
                    {
                        x: 334,
                        y: 333
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q25,
                options: [
                    {
                        x: 47.5,
                        y: 193.5
                    },
                    {
                        x: 140.5,
                        y: 193.5
                    },
                    {
                        x: 448.5,
                        y: 193.5
                    }
                ]
            },
            {
                text: json.q25_iftrue,
                page: 3,
                x: 45,
                y: 160,
                break: 90
            },
            {
                type: "X",
                page: 4,
                selected: json.q26,
                options: [
                    {
                        x: 47.5,
                        y: 740
                    },
                    {
                        x: 243.5,
                        y: 740
                    }
                ]
            },
            {
                text: json.q26_iftrue + "\n",
                page: 4,
                x: 45,
                y: 695,
                break: 90
            },
            {
                type: "X",
                page: 4,
                selected: json.q27,
                options: [
                    {
                        x: 48.5,
                        y: 608
                    },
                    {
                        x: 241.5,
                        y: 608
                    }
                ]
            },
            {
                text: json.q27_iftrue + "\n",
                page: 4,
                x: 45,
                y: 565,
                break: 90,
            },
            {
                type: "X",
                page: 4,
                selected: json.q28,
                options: [
                    {
                        x: 47.5,
                        y: 473
                    },
                    {
                        x: 242,
                        y: 473
                    }
                ]
            },
            {
                text: json.q28_iftrue,
                page: 4,
                x: 44.5,
                y: 432,
                break: 90,
            },
            {
                type: "X",
                page: 4,
                selected: json.q29,
                options: [
                    {
                        x: 47.5,
                        y: 341.5
                    },
                    {
                        x: 242,
                        y: 341.5
                    }
                ]
            },
            {
                text: json.q29_iftrue,
                page: 4,
                x: 45,
                y: 300,
                break: 90,
            },
            {
                type: "X",
                page: 4,
                selected: json.q30,
                options: [
                    {
                        x: 47.5,
                        y: 215
                    },
                    {
                        x: 157,
                        y: 215
                    },
                    {
                        x: 262,
                        y: 215
                    }
                ]
            },
            {
                type: "X",
                page: 4,
                selected: json.q30_1,
                options: [
                    {
                        x: 47.5,
                        y: 147
                    },
                    {
                        x: 157,
                        y: 147
                    }
                ]
            },
            {
                text: json.q30_2,
                page: 4,
                x: 45.5,
                y: 110,
                break: 90
            },
            {
                text: moment(new Date(), "", "pt").tz("America/Sao_Paulo").format("DD/MM/YYYY"),
                page: 5,
                x: 47,
                y: 675
            },
            {
                text: json.responsible,
                page: 5,
                x: 125,
                y: 675
            }
        ],
        en: [
            {
                text: json.dado1,
                page: 0,
                x: 130,
                y: 725
            },
            {
                text: json.dado2,
                page: 0,
                x: 77,
                y: 698.5
            },
            {
                text: json.q1,
                page: 1,
                x: 52,
                y: 770
            },
            {
                type: "X",
                page: 1,
                selected: json.q2,
                options: [
                    {
                        x: 46.5,
                        y: 727
                    },
                    {
                        x: 125,
                        y: 727
                    },
                    {
                        x: 207,
                        y: 727
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q3,
                options: [
                    {
                        x: 46.5,
                        y: 688.5
                    },
                    {
                        x: 90,
                        y: 688.5
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q4,
                options: [
                    {
                        x: 47.3,
                        y: 633,
                    },
                    {
                        x: 343.3,
                        y: 633
                    }
                ]
            },
            {
                text: json.q4_iftrue,
                page: 1,
                x: 242,
                y: 618
            },
            {
                type: "X",
                page: 1,
                selected: json.q5,
                options: [
                    {
                        x: 47.3,
                        y: 549.5
                    },
                    {
                        x: 343.3,
                        y: 549.5
                    }
                ]
            },
            {
                text: json.q5_iftrue,
                page: 1,
                x: 242,
                y: 534
            },
            {
                type: "X",
                page: 1,
                selected: json.q6,
                options: [
                    {
                        x: 47.3,
                        y: 465
                    },
                    {
                        x: 343.3,
                        y: 465
                    }
                ]
            },
            {
                text: json.q6_iftrue,
                page: 1,
                x: 242,
                y: 448.5,
            },
            {
                type: "X",
                page: 1,
                selected: json.q7,
                options: [
                    {
                        x: 47.3,
                        y: 380,
                    },
                    {
                        x: 343.3,
                        y: 380
                    }
                ]
            },
            {
                text: json.q7_iftrue,
                page: 1,
                x: 182,
                y: 364
            },
            {
                type: "X",
                page: 1,
                selected: json.q8,
                options: [
                    {
                        x: 46.5,
                        y: 322.5
                    },
                    {
                        x: 136.5,
                        y: 322.5
                    },
                    {
                        x: 255,
                        y: 322.5
                    },
                    {
                        x: 320,
                        y: 322.5
                    },
                    {
                        x: 46.5,
                        y: 306
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q9,
                options: [
                    {
                        x: 47.5,
                        y: 237
                    },
                    {
                        x: 144.5,
                        y: 237
                    }
                ]
            },
            {
                type: "X",
                page: 1,
                selected: json.q10,
                options: [
                    {
                        x: 47.5,
                        y: 181.5
                    },
                    {
                        x: 147.2,
                        y: 181.5
                    }
                ]
            },
            {
                type: "X",
                page: 2,
                selected: json.q11,
                options: [
                    {
                        x: 47.5,
                        y: 715
                    },
                    {
                        x: 147.2,
                        y: 715
                    }
                ]
            },
            {
                type: "X",
                page: 2,
                selected: json.q12,
                options: [
                    {
                        x: 47.5,
                        y: 646,
                    },
                    {
                        x: 147.2,
                        y: 646
                    }
                ]
            },
            {
                text: json.q12_iftrue,
                page: 2,
                x: 42,
                y: 623,
                break: 120
            },
            {
                type: "X",
                page: 2,
                selected: json.q13,
                options: [
                    {
                        x: 47.5,
                        y: 533
                    },
                    {
                        x: 343.7,
                        y: 533
                    }
                ]
            },
            {
                text: json.q13_iftrue,
                page: 2,
                x: 45,
                y: 505,
                break: 120
            },
            {
                type: "X",
                page: 2,
                selected: json.q14,
                options: [
                    {
                        x: 47.5,
                        y: 430
                    },
                    {
                        x: 341,
                        y: 430
                    }
                ]
            },
            {
                text: json.q14_iftrue,
                page: 2,
                x: 45,
                y: 403,
                break: 120
            },
            {
                type: "X",
                page: 2,
                selected: json.q15,
                options: [
                    {
                        x: 47.5,
                        y: 315,
                    },
                    {
                        x: 341,
                        y: 315
                    }
                ]
            },
            {
                text: json.q15_iftrue,
                page: 2,
                x: 45,
                y: 285,
                break: 90
            },
            {
                type: "X",
                page: 2,
                selected: json.q16,
                options: [
                    {
                        x: 47.5,
                        y: 198
                    },
                    {
                        x: 341,
                        y: 198
                    }
                ]
            },
            {
                text: json.q16_iftrue,
                page: 2,
                x: 45,
                y: 170
            },
            {
                type: "X",
                page: 2,
                selected: json.q17,
                options: [
                    {
                        x: 47.5,
                        y: 126
                    },
                    {
                        x: 47.5,
                        y: 111
                    },
                    {
                        x: 47.5,
                        y: 94
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q18,
                options: [
                    {
                        x: 47.5,
                        y: 766.5
                    },
                    {
                        x: 341,
                        y: 766.5
                    }
                ]
            },
            {
                text: json.q18_iftrue,
                page: 3,
                x: 45,
                y: 738.5,
                break: 120
            },
            {
                type: "X",
                page: 3,
                selected: json.q19,
                options: [
                    {
                        x: 47.5,
                        y: 681
                    },
                    {
                        x: 85,
                        y: 681
                    }
                ]
            },
            {
                text: json.q19_iftrue,
                page: 3,
                x: 42.5,
                y: 653,
                break: 120
            },
            {
                type: "X",
                page: 3,
                selected: json.q20,
                options: [
                    {
                        x: 47.5,
                        y: 580
                    },
                    {
                        x: 343.5,
                        y: 580
                    }
                ]
            },
            {
                text: json.q20_iftrue,
                page: 3,
                x: 45,
                y: 550,
                break: 120
            },
            {
                type: "X",
                page: 3,
                selected: json.q21,
                options: [
                    {
                        x: 47.5,
                        y: 450,
                    },
                    {
                        x: 343.5,
                        y: 450
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q22,
                options: [
                    {
                        x: 47.5,
                        y: 382
                    },
                    {
                        x: 346,
                        y: 382
                    },
                    {
                        x: 47.5,
                        y: 365
                    },
                    {
                        x: 346,
                        y: 365
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q23,
                options: [
                    {
                        x: 47.5,
                        y: 298
                    },
                    {
                        x: 346,
                        y: 298
                    }
                ]
            },
            {
                type: "X",
                page: 3,
                selected: json.q24,
                options: [
                    {
                        x: 47.5,
                        y: 215
                    },
                    {
                        x: 343,
                        y: 215
                    }
                ]
            },
            {
                type: "X",
                page: 4,
                selected: json.q25,
                options: [
                    {
                        x: 47.5,
                        y: 686
                    },
                    {
                        x: 156.5,
                        y: 686
                    },
                    {
                        x: 430,
                        y: 686
                    }
                ]
            },
            {
                text: json.q25_iftrue,
                page: 4,
                x: 45,
                y: 660,
                break: 120
            },
            {
                type: "X",
                page: 4,
                selected: json.q26,
                options: [
                    {
                        x: 47.5,
                        y: 567
                    },
                    {
                        x: 216,
                        y: 567
                    }
                ]
            },
            {
                text: json.q26_iftrue,
                page: 4,
                x: 45,
                y: 525,
                break: 120
            },
            {
                type: "X",
                page: 4,
                selected: json.q27,
                options: [
                    {
                        x: 48,
                        y: 435
                    },
                    {
                        x: 219,
                        y: 435
                    }
                ]
            },
            {
                text: json.q27_iftrue,
                page: 4,
                x: 45,
                y: 395,
                break: 90,
            },
            {
                type: "X",
                page: 4,
                selected: json.q28,
                options: [
                    {
                        x: 47.5,
                        y: 310
                    },
                    {
                        x: 222,
                        y: 310
                    }
                ]
            },
            {
                text: json.q28_iftrue,
                page: 4,
                x: 44.5,
                y: 268,
                break: 120,
            },
            {
                type: "X",
                page: 4,
                selected: json.q29,
                options: [
                    {
                        x: 47.5,
                        y: 182
                    },
                    {
                        x: 221.5,
                        y: 182
                    }
                ]
            },
            {
                text: json.q29_iftrue,
                page: 4,
                x: 45,
                y: 140,
                break: 120
            },
            {
                type: "X",
                page: 5,
                selected: json.q30,
                options: [
                    {
                        x: 47.5,
                        y: 740
                    },
                    {
                        x: 142.5,
                        y: 740
                    },
                    {
                        x: 230,
                        y: 740
                    }
                ]
            },
            {
                type: "X",
                page: 5,
                selected: json.q30_1,
                options: [
                    {
                        x: 47.5,
                        y: 672
                    },
                    {
                        x: 144,
                        y: 672
                    }
                ]
            },
            {
                text: json.q30_2,
                page: 5,
                x: 45,
                y: 648,
                break: 120
            },
            {
                text: moment(new Date(), "", "en").tz("America/Sao_Paulo").format("MM/DD/YYYY"),
                page: 5,
                x: 47,
                y: 520
            },
            {
                text: json.responsible,
                page: 5,
                x: 125,
                y: 520
            }
        ]
    }

    return texts;
}

module.exports = getPositions