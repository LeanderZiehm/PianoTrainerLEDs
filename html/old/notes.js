const notes = [
  {
    "note": 81,
    "time": 0,
    "velocity": 90
  },
  {
    "note": 93,
    "time": 0,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 0,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 15,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 15,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 16,
    "velocity": 86
  },
  {
    "note": 67,
    "time": 16,
    "velocity": 117
  },
  {
    "note": 79,
    "time": 16,
    "velocity": 118
  },
  {
    "note": 91,
    "time": 31,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 31,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 31,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 32,
    "velocity": 100
  },
  {
    "note": 93,
    "time": 32,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 32,
    "velocity": 78
  },
  {
    "note": 81,
    "time": 119,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 119,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 119,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 160,
    "velocity": 85
  },
  {
    "note": 91,
    "time": 160,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 160,
    "velocity": 85
  },
  {
    "note": 79,
    "time": 175,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 175,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 175,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 176,
    "velocity": 89
  },
  {
    "note": 65,
    "time": 176,
    "velocity": 87
  },
  {
    "note": 89,
    "time": 191,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 191,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 192,
    "velocity": 92
  },
  {
    "note": 64,
    "time": 192,
    "velocity": 88
  },
  {
    "note": 88,
    "time": 207,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 207,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 208,
    "velocity": 91
  },
  {
    "note": 62,
    "time": 208,
    "velocity": 89
  },
  {
    "note": 86,
    "time": 223,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 223,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 224,
    "velocity": 90
  },
  {
    "note": 61,
    "time": 224,
    "velocity": 122
  },
  {
    "note": 73,
    "time": 224,
    "velocity": 120
  },
  {
    "note": 85,
    "time": 253,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 253,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 253,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 256,
    "velocity": 103
  },
  {
    "note": 62,
    "time": 256,
    "velocity": 108
  },
  {
    "note": 74,
    "time": 256,
    "velocity": 107
  },
  {
    "note": 86,
    "time": 314,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 314,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 314,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 512,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 512,
    "velocity": 89
  },
  {
    "note": 57,
    "time": 512,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 527,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 527,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 527,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 528,
    "velocity": 87
  },
  {
    "note": 55,
    "time": 528,
    "velocity": 116
  },
  {
    "note": 67,
    "time": 528,
    "velocity": 117
  },
  {
    "note": 79,
    "time": 543,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 543,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 543,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 544,
    "velocity": 100
  },
  {
    "note": 81,
    "time": 544,
    "velocity": 101
  },
  {
    "note": 57,
    "time": 544,
    "velocity": 77
  },
  {
    "note": 69,
    "time": 631,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 631,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 631,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 672,
    "velocity": 85
  },
  {
    "note": 76,
    "time": 672,
    "velocity": 88
  },
  {
    "note": 52,
    "time": 672,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 701,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 701,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 701,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 704,
    "velocity": 99
  },
  {
    "note": 77,
    "time": 704,
    "velocity": 98
  },
  {
    "note": 53,
    "time": 704,
    "velocity": 100
  },
  {
    "note": 65,
    "time": 733,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 733,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 733,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 736,
    "velocity": 83
  },
  {
    "note": 49,
    "time": 736,
    "velocity": 113
  },
  {
    "note": 61,
    "time": 736,
    "velocity": 112
  },
  {
    "note": 73,
    "time": 765,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 765,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 765,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 768,
    "velocity": 102
  },
  {
    "note": 50,
    "time": 768,
    "velocity": 106
  },
  {
    "note": 62,
    "time": 768,
    "velocity": 106
  },
  {
    "note": 74,
    "time": 826,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 826,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 826,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 1024,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 1024,
    "velocity": 90
  },
  {
    "note": 45,
    "time": 1024,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 1039,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 1039,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 1039,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 1040,
    "velocity": 88
  },
  {
    "note": 43,
    "time": 1040,
    "velocity": 117
  },
  {
    "note": 55,
    "time": 1040,
    "velocity": 116
  },
  {
    "note": 67,
    "time": 1055,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 1055,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 1055,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 1056,
    "velocity": 100
  },
  {
    "note": 69,
    "time": 1056,
    "velocity": 101
  },
  {
    "note": 45,
    "time": 1056,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 1143,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 1143,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 1143,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 1184,
    "velocity": 85
  },
  {
    "note": 67,
    "time": 1184,
    "velocity": 87
  },
  {
    "note": 43,
    "time": 1184,
    "velocity": 87
  },
  {
    "note": 55,
    "time": 1199,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 1199,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 1199,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 1200,
    "velocity": 88
  },
  {
    "note": 41,
    "time": 1200,
    "velocity": 87
  },
  {
    "note": 65,
    "time": 1215,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 1215,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 1216,
    "velocity": 92
  },
  {
    "note": 40,
    "time": 1216,
    "velocity": 90
  },
  {
    "note": 64,
    "time": 1231,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 1231,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 1232,
    "velocity": 88
  },
  {
    "note": 38,
    "time": 1232,
    "velocity": 89
  },
  {
    "note": 62,
    "time": 1247,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 1247,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 1248,
    "velocity": 91
  },
  {
    "note": 37,
    "time": 1248,
    "velocity": 120
  },
  {
    "note": 49,
    "time": 1248,
    "velocity": 122
  },
  {
    "note": 61,
    "time": 1277,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 1277,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 1277,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 1280,
    "velocity": 102
  },
  {
    "note": 38,
    "time": 1280,
    "velocity": 109
  },
  {
    "note": 50,
    "time": 1280,
    "velocity": 107
  },
  {
    "note": 62,
    "time": 1338,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 1338,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 1338,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 1536,
    "velocity": 116
  },
  {
    "note": 38,
    "time": 1536,
    "velocity": 118
  },
  {
    "note": 52,
    "time": 1792,
    "velocity": 84
  },
  {
    "note": 55,
    "time": 1792,
    "velocity": 87
  },
  {
    "note": 61,
    "time": 1792,
    "velocity": 87
  },
  {
    "note": 38,
    "time": 1792,
    "velocity": 42
  },
  {
    "note": 40,
    "time": 1792,
    "velocity": 43
  },
  {
    "note": 46,
    "time": 1792,
    "velocity": 42
  },
  {
    "note": 52,
    "time": 2023,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 2023,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 2023,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 2023,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 2023,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 2023,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 2048,
    "velocity": 106
  },
  {
    "note": 58,
    "time": 2048,
    "velocity": 106
  },
  {
    "note": 64,
    "time": 2048,
    "velocity": 104
  },
  {
    "note": 38,
    "time": 2048,
    "velocity": 63
  },
  {
    "note": 40,
    "time": 2048,
    "velocity": 65
  },
  {
    "note": 46,
    "time": 2048,
    "velocity": 66
  },
  {
    "note": 49,
    "time": 2048,
    "velocity": 63
  },
  {
    "note": 55,
    "time": 2279,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 2279,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 2279,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 2279,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 2279,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 2279,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 2279,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 2304,
    "velocity": 110
  },
  {
    "note": 58,
    "time": 2304,
    "velocity": 113
  },
  {
    "note": 61,
    "time": 2304,
    "velocity": 110
  },
  {
    "note": 67,
    "time": 2304,
    "velocity": 109
  },
  {
    "note": 38,
    "time": 2304,
    "velocity": 75
  },
  {
    "note": 40,
    "time": 2304,
    "velocity": 76
  },
  {
    "note": 46,
    "time": 2304,
    "velocity": 76
  },
  {
    "note": 50,
    "time": 2304,
    "velocity": 74
  },
  {
    "note": 26,
    "time": 2510,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 2510,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 2535,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 2560,
    "velocity": 116
  },
  {
    "note": 61,
    "time": 2560,
    "velocity": 115
  },
  {
    "note": 64,
    "time": 2560,
    "velocity": 114
  },
  {
    "note": 70,
    "time": 2560,
    "velocity": 115
  },
  {
    "note": 38,
    "time": 2560,
    "velocity": 91
  },
  {
    "note": 43,
    "time": 2560,
    "velocity": 93
  },
  {
    "note": 46,
    "time": 2560,
    "velocity": 91
  },
  {
    "note": 50,
    "time": 2560,
    "velocity": 93
  },
  {
    "note": 52,
    "time": 2560,
    "velocity": 92
  },
  {
    "note": 55,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 2791,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 2816,
    "velocity": 117
  },
  {
    "note": 64,
    "time": 2816,
    "velocity": 118
  },
  {
    "note": 67,
    "time": 2816,
    "velocity": 119
  },
  {
    "note": 73,
    "time": 2816,
    "velocity": 117
  },
  {
    "note": 38,
    "time": 2816,
    "velocity": 97
  },
  {
    "note": 43,
    "time": 2816,
    "velocity": 100
  },
  {
    "note": 46,
    "time": 2816,
    "velocity": 98
  },
  {
    "note": 50,
    "time": 2816,
    "velocity": 98
  },
  {
    "note": 52,
    "time": 2816,
    "velocity": 99
  },
  {
    "note": 58,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 3047,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 3072,
    "velocity": 121
  },
  {
    "note": 67,
    "time": 3072,
    "velocity": 124
  },
  {
    "note": 70,
    "time": 3072,
    "velocity": 123
  },
  {
    "note": 73,
    "time": 3072,
    "velocity": 121
  },
  {
    "note": 76,
    "time": 3072,
    "velocity": 120
  },
  {
    "note": 38,
    "time": 3072,
    "velocity": 111
  },
  {
    "note": 43,
    "time": 3072,
    "velocity": 113
  },
  {
    "note": 46,
    "time": 3072,
    "velocity": 111
  },
  {
    "note": 49,
    "time": 3072,
    "velocity": 109
  },
  {
    "note": 50,
    "time": 3072,
    "velocity": 111
  },
  {
    "note": 52,
    "time": 3072,
    "velocity": 110
  },
  {
    "note": 62,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 3559,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 3584,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 3584,
    "velocity": 102
  },
  {
    "note": 74,
    "time": 3584,
    "velocity": 104
  },
  {
    "note": 67,
    "time": 3584,
    "velocity": 90
  },
  {
    "note": 43,
    "time": 3584,
    "velocity": 90
  },
  {
    "note": 38,
    "time": 3584,
    "velocity": 76
  },
  {
    "note": 45,
    "time": 3584,
    "velocity": 79
  },
  {
    "note": 50,
    "time": 3584,
    "velocity": 76
  },
  {
    "note": 67,
    "time": 3642,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 3642,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 3648,
    "velocity": 85
  },
  {
    "note": 40,
    "time": 3648,
    "velocity": 126
  },
  {
    "note": 52,
    "time": 3648,
    "velocity": 127
  },
  {
    "note": 64,
    "time": 3706,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 3706,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 3706,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 3712,
    "velocity": 100
  },
  {
    "note": 42,
    "time": 3712,
    "velocity": 123
  },
  {
    "note": 54,
    "time": 3712,
    "velocity": 122
  },
  {
    "note": 62,
    "time": 3956,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 3956,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 3956,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 3956,
    "velocity": 0
  },
  {
    "note": 42,
    "time": 3956,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 3956,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 4071,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 4071,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 4071,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 4224,
    "velocity": 88
  },
  {
    "note": 73,
    "time": 4224,
    "velocity": 87
  },
  {
    "note": 61,
    "time": 4282,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 4282,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 4288,
    "velocity": 103
  },
  {
    "note": 74,
    "time": 4288,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 4326,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 4326,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 4330,
    "velocity": 102
  },
  {
    "note": 76,
    "time": 4330,
    "velocity": 104
  },
  {
    "note": 64,
    "time": 4369,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 4369,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 4373,
    "velocity": 87
  },
  {
    "note": 73,
    "time": 4373,
    "velocity": 89
  },
  {
    "note": 61,
    "time": 4412,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 4412,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 4416,
    "velocity": 99
  },
  {
    "note": 74,
    "time": 4416,
    "velocity": 100
  },
  {
    "note": 62,
    "time": 4454,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 4454,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 4458,
    "velocity": 103
  },
  {
    "note": 76,
    "time": 4458,
    "velocity": 101
  },
  {
    "note": 64,
    "time": 4497,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 4497,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 4501,
    "velocity": 90
  },
  {
    "note": 73,
    "time": 4501,
    "velocity": 87
  },
  {
    "note": 61,
    "time": 4540,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 4540,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 4544,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 4544,
    "velocity": 104
  },
  {
    "note": 62,
    "time": 4582,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 4582,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 4586,
    "velocity": 101
  },
  {
    "note": 76,
    "time": 4586,
    "velocity": 102
  },
  {
    "note": 64,
    "time": 4625,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 4625,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 4629,
    "velocity": 88
  },
  {
    "note": 73,
    "time": 4629,
    "velocity": 86
  },
  {
    "note": 61,
    "time": 4668,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 4668,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 4672,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 4672,
    "velocity": 98
  },
  {
    "note": 62,
    "time": 4704,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 4704,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 4736,
    "velocity": 104
  },
  {
    "note": 76,
    "time": 4736,
    "velocity": 100
  },
  {
    "note": 64,
    "time": 4768,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 4768,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 4800,
    "velocity": 104
  },
  {
    "note": 77,
    "time": 4800,
    "velocity": 103
  },
  {
    "note": 65,
    "time": 4838,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 4838,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 4842,
    "velocity": 102
  },
  {
    "note": 79,
    "time": 4842,
    "velocity": 103
  },
  {
    "note": 67,
    "time": 4881,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 4881,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 4885,
    "velocity": 87
  },
  {
    "note": 76,
    "time": 4885,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 4924,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 4924,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 4928,
    "velocity": 98
  },
  {
    "note": 77,
    "time": 4928,
    "velocity": 99
  },
  {
    "note": 65,
    "time": 4966,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 4966,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 4970,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 4970,
    "velocity": 103
  },
  {
    "note": 67,
    "time": 5009,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 5009,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 5013,
    "velocity": 89
  },
  {
    "note": 76,
    "time": 5013,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 5052,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 5052,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 5056,
    "velocity": 103
  },
  {
    "note": 77,
    "time": 5056,
    "velocity": 102
  },
  {
    "note": 65,
    "time": 5094,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 5094,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 5098,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 5098,
    "velocity": 101
  },
  {
    "note": 67,
    "time": 5137,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 5137,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 5141,
    "velocity": 86
  },
  {
    "note": 76,
    "time": 5141,
    "velocity": 88
  },
  {
    "note": 64,
    "time": 5180,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 5180,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 5184,
    "velocity": 100
  },
  {
    "note": 77,
    "time": 5184,
    "velocity": 101
  },
  {
    "note": 65,
    "time": 5216,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 5216,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 5248,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 5248,
    "velocity": 100
  },
  {
    "note": 67,
    "time": 5280,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 5280,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 5312,
    "velocity": 104
  },
  {
    "note": 81,
    "time": 5312,
    "velocity": 106
  },
  {
    "note": 69,
    "time": 5350,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 5350,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 5354,
    "velocity": 102
  },
  {
    "note": 82,
    "time": 5354,
    "velocity": 101
  },
  {
    "note": 70,
    "time": 5393,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 5393,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 5397,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 5397,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 5436,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 5436,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 5440,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 5440,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 5478,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 5478,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 5482,
    "velocity": 102
  },
  {
    "note": 82,
    "time": 5482,
    "velocity": 102
  },
  {
    "note": 70,
    "time": 5521,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 5521,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 5525,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 5525,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 5564,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 5564,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 5568,
    "velocity": 106
  },
  {
    "note": 81,
    "time": 5568,
    "velocity": 105
  },
  {
    "note": 69,
    "time": 5606,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 5606,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 5610,
    "velocity": 100
  },
  {
    "note": 82,
    "time": 5610,
    "velocity": 102
  },
  {
    "note": 70,
    "time": 5649,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 5649,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 5653,
    "velocity": 90
  },
  {
    "note": 79,
    "time": 5653,
    "velocity": 89
  },
  {
    "note": 67,
    "time": 5675,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 5675,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 5696,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 5696,
    "velocity": 102
  },
  {
    "note": 69,
    "time": 5728,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 5728,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 6272,
    "velocity": 56
  },
  {
    "note": 85,
    "time": 6272,
    "velocity": 56
  },
  {
    "note": 73,
    "time": 6330,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 6330,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 6336,
    "velocity": 67
  },
  {
    "note": 86,
    "time": 6336,
    "velocity": 68
  },
  {
    "note": 62,
    "time": 6336,
    "velocity": 88
  },
  {
    "note": 74,
    "time": 6374,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 6374,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 6374,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 6378,
    "velocity": 47
  },
  {
    "note": 64,
    "time": 6378,
    "velocity": 99
  },
  {
    "note": 76,
    "time": 6417,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 6417,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 6421,
    "velocity": 74
  },
  {
    "note": 61,
    "time": 6421,
    "velocity": 88
  },
  {
    "note": 85,
    "time": 6460,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 6460,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 6464,
    "velocity": 67
  },
  {
    "note": 86,
    "time": 6464,
    "velocity": 69
  },
  {
    "note": 62,
    "time": 6464,
    "velocity": 99
  },
  {
    "note": 74,
    "time": 6502,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 6502,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 6502,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 6506,
    "velocity": 50
  },
  {
    "note": 64,
    "time": 6506,
    "velocity": 103
  },
  {
    "note": 76,
    "time": 6545,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 6545,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 6549,
    "velocity": 74
  },
  {
    "note": 61,
    "time": 6549,
    "velocity": 90
  },
  {
    "note": 85,
    "time": 6588,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 6588,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 6592,
    "velocity": 69
  },
  {
    "note": 86,
    "time": 6592,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 6592,
    "velocity": 102
  },
  {
    "note": 74,
    "time": 6630,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 6630,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 6630,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 6634,
    "velocity": 46
  },
  {
    "note": 64,
    "time": 6634,
    "velocity": 104
  },
  {
    "note": 76,
    "time": 6673,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 6673,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 6677,
    "velocity": 74
  },
  {
    "note": 61,
    "time": 6677,
    "velocity": 87
  },
  {
    "note": 85,
    "time": 6716,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 6716,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 6720,
    "velocity": 67
  },
  {
    "note": 86,
    "time": 6720,
    "velocity": 66
  },
  {
    "note": 62,
    "time": 6720,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 6752,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 6752,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 6778,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 6784,
    "velocity": 67
  },
  {
    "note": 88,
    "time": 6784,
    "velocity": 66
  },
  {
    "note": 64,
    "time": 6784,
    "velocity": 103
  },
  {
    "note": 76,
    "time": 6816,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 6816,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 6816,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 6848,
    "velocity": 67
  },
  {
    "note": 89,
    "time": 6848,
    "velocity": 69
  },
  {
    "note": 65,
    "time": 6848,
    "velocity": 103
  },
  {
    "note": 77,
    "time": 6886,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 6886,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 6886,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 6890,
    "velocity": 50
  },
  {
    "note": 67,
    "time": 6890,
    "velocity": 101
  },
  {
    "note": 79,
    "time": 6929,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 6929,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 6933,
    "velocity": 75
  },
  {
    "note": 64,
    "time": 6933,
    "velocity": 89
  },
  {
    "note": 88,
    "time": 6972,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 6972,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 6976,
    "velocity": 67
  },
  {
    "note": 89,
    "time": 6976,
    "velocity": 67
  },
  {
    "note": 65,
    "time": 6976,
    "velocity": 99
  },
  {
    "note": 77,
    "time": 7014,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 7014,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 7014,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 7018,
    "velocity": 47
  },
  {
    "note": 67,
    "time": 7018,
    "velocity": 102
  },
  {
    "note": 79,
    "time": 7057,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 7057,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 7061,
    "velocity": 73
  },
  {
    "note": 64,
    "time": 7061,
    "velocity": 87
  },
  {
    "note": 88,
    "time": 7100,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 7100,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 7104,
    "velocity": 69
  },
  {
    "note": 89,
    "time": 7104,
    "velocity": 70
  },
  {
    "note": 65,
    "time": 7104,
    "velocity": 102
  },
  {
    "note": 77,
    "time": 7142,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 7142,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 7142,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 7146,
    "velocity": 47
  },
  {
    "note": 67,
    "time": 7146,
    "velocity": 101
  },
  {
    "note": 79,
    "time": 7185,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 7185,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 7189,
    "velocity": 73
  },
  {
    "note": 64,
    "time": 7189,
    "velocity": 89
  },
  {
    "note": 88,
    "time": 7228,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 7228,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 7232,
    "velocity": 67
  },
  {
    "note": 89,
    "time": 7232,
    "velocity": 66
  },
  {
    "note": 65,
    "time": 7232,
    "velocity": 97
  },
  {
    "note": 77,
    "time": 7264,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 7264,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 7264,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 7296,
    "velocity": 66
  },
  {
    "note": 91,
    "time": 7296,
    "velocity": 65
  },
  {
    "note": 67,
    "time": 7296,
    "velocity": 95
  },
  {
    "note": 79,
    "time": 7328,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 7328,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 7328,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 7360,
    "velocity": 66
  },
  {
    "note": 93,
    "time": 7360,
    "velocity": 67
  },
  {
    "note": 69,
    "time": 7360,
    "velocity": 92
  },
  {
    "note": 81,
    "time": 7398,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 7398,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 7398,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 7402,
    "velocity": 41
  },
  {
    "note": 70,
    "time": 7402,
    "velocity": 81
  },
  {
    "note": 82,
    "time": 7441,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 7441,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 7445,
    "velocity": 63
  },
  {
    "note": 67,
    "time": 7445,
    "velocity": 66
  },
  {
    "note": 91,
    "time": 7484,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 7484,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 7488,
    "velocity": 58
  },
  {
    "note": 93,
    "time": 7488,
    "velocity": 57
  },
  {
    "note": 69,
    "time": 7488,
    "velocity": 70
  },
  {
    "note": 81,
    "time": 7526,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 7526,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 7526,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 7530,
    "velocity": 38
  },
  {
    "note": 70,
    "time": 7530,
    "velocity": 64
  },
  {
    "note": 82,
    "time": 7569,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 7569,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 7573,
    "velocity": 57
  },
  {
    "note": 67,
    "time": 7573,
    "velocity": 47
  },
  {
    "note": 91,
    "time": 7612,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 7612,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 7616,
    "velocity": 56
  },
  {
    "note": 93,
    "time": 7616,
    "velocity": 54
  },
  {
    "note": 69,
    "time": 7616,
    "velocity": 51
  },
  {
    "note": 81,
    "time": 7654,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 7654,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 7654,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 7658,
    "velocity": 33
  },
  {
    "note": 70,
    "time": 7658,
    "velocity": 46
  },
  {
    "note": 82,
    "time": 7697,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 7697,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 7701,
    "velocity": 49
  },
  {
    "note": 67,
    "time": 7701,
    "velocity": 32
  },
  {
    "note": 91,
    "time": 7740,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 7740,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 7744,
    "velocity": 44
  },
  {
    "note": 93,
    "time": 7744,
    "velocity": 43
  },
  {
    "note": 69,
    "time": 7744,
    "velocity": 33
  },
  {
    "note": 81,
    "time": 7776,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 7776,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 7776,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 8320,
    "velocity": 88
  },
  {
    "note": 93,
    "time": 8320,
    "velocity": 86
  },
  {
    "note": 81,
    "time": 8378,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 8378,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 8384,
    "velocity": 90
  },
  {
    "note": 91,
    "time": 8384,
    "velocity": 91
  },
  {
    "note": 67,
    "time": 8384,
    "velocity": 27
  },
  {
    "note": 79,
    "time": 8422,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 8422,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 8422,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 8426,
    "velocity": 105
  },
  {
    "note": 94,
    "time": 8426,
    "velocity": 102
  },
  {
    "note": 70,
    "time": 8426,
    "velocity": 35
  },
  {
    "note": 82,
    "time": 8465,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 8465,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 8465,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 8469,
    "velocity": 84
  },
  {
    "note": 64,
    "time": 8469,
    "velocity": 40
  },
  {
    "note": 76,
    "time": 8469,
    "velocity": 38
  },
  {
    "note": 88,
    "time": 8508,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 8508,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 8508,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 8512,
    "velocity": 104
  },
  {
    "note": 91,
    "time": 8512,
    "velocity": 103
  },
  {
    "note": 67,
    "time": 8512,
    "velocity": 27
  },
  {
    "note": 79,
    "time": 8550,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 8550,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 8550,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 8554,
    "velocity": 108
  },
  {
    "note": 94,
    "time": 8554,
    "velocity": 105
  },
  {
    "note": 70,
    "time": 8554,
    "velocity": 40
  },
  {
    "note": 82,
    "time": 8593,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 8593,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 8593,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 8597,
    "velocity": 84
  },
  {
    "note": 64,
    "time": 8597,
    "velocity": 47
  },
  {
    "note": 76,
    "time": 8597,
    "velocity": 46
  },
  {
    "note": 88,
    "time": 8636,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 8636,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 8636,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 8640,
    "velocity": 101
  },
  {
    "note": 89,
    "time": 8640,
    "velocity": 101
  },
  {
    "note": 65,
    "time": 8640,
    "velocity": 36
  },
  {
    "note": 77,
    "time": 8678,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 8678,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 8678,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 8682,
    "velocity": 109
  },
  {
    "note": 93,
    "time": 8682,
    "velocity": 108
  },
  {
    "note": 69,
    "time": 8682,
    "velocity": 45
  },
  {
    "note": 81,
    "time": 8721,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 8721,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 8721,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 8725,
    "velocity": 81
  },
  {
    "note": 62,
    "time": 8725,
    "velocity": 51
  },
  {
    "note": 74,
    "time": 8725,
    "velocity": 52
  },
  {
    "note": 86,
    "time": 8764,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 8764,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 8764,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 8768,
    "velocity": 105
  },
  {
    "note": 89,
    "time": 8768,
    "velocity": 104
  },
  {
    "note": 65,
    "time": 8768,
    "velocity": 38
  },
  {
    "note": 77,
    "time": 8806,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 8806,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 8806,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 8810,
    "velocity": 110
  },
  {
    "note": 93,
    "time": 8810,
    "velocity": 113
  },
  {
    "note": 69,
    "time": 8810,
    "velocity": 51
  },
  {
    "note": 81,
    "time": 8849,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 8849,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 8849,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 8853,
    "velocity": 83
  },
  {
    "note": 62,
    "time": 8853,
    "velocity": 60
  },
  {
    "note": 74,
    "time": 8853,
    "velocity": 58
  },
  {
    "note": 86,
    "time": 8892,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 8892,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 8892,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 8896,
    "velocity": 107
  },
  {
    "note": 88,
    "time": 8896,
    "velocity": 106
  },
  {
    "note": 64,
    "time": 8896,
    "velocity": 45
  },
  {
    "note": 76,
    "time": 8934,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 8934,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 8934,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 8938,
    "velocity": 107
  },
  {
    "note": 91,
    "time": 8938,
    "velocity": 108
  },
  {
    "note": 67,
    "time": 8938,
    "velocity": 59
  },
  {
    "note": 79,
    "time": 8977,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 8977,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 8977,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 8981,
    "velocity": 83
  },
  {
    "note": 60,
    "time": 8981,
    "velocity": 66
  },
  {
    "note": 72,
    "time": 8981,
    "velocity": 66
  },
  {
    "note": 84,
    "time": 9020,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 9020,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 9020,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 9024,
    "velocity": 110
  },
  {
    "note": 88,
    "time": 9024,
    "velocity": 110
  },
  {
    "note": 64,
    "time": 9024,
    "velocity": 51
  },
  {
    "note": 76,
    "time": 9062,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 9062,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 9062,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 9066,
    "velocity": 113
  },
  {
    "note": 91,
    "time": 9066,
    "velocity": 110
  },
  {
    "note": 67,
    "time": 9066,
    "velocity": 67
  },
  {
    "note": 79,
    "time": 9105,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 9105,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 9105,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 9109,
    "velocity": 83
  },
  {
    "note": 60,
    "time": 9109,
    "velocity": 73
  },
  {
    "note": 72,
    "time": 9109,
    "velocity": 71
  },
  {
    "note": 84,
    "time": 9148,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 9148,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 9148,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 9152,
    "velocity": 110
  },
  {
    "note": 86,
    "time": 9152,
    "velocity": 110
  },
  {
    "note": 62,
    "time": 9152,
    "velocity": 54
  },
  {
    "note": 74,
    "time": 9190,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 9190,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 9190,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 9194,
    "velocity": 113
  },
  {
    "note": 89,
    "time": 9194,
    "velocity": 111
  },
  {
    "note": 65,
    "time": 9194,
    "velocity": 70
  },
  {
    "note": 77,
    "time": 9233,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 9233,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 9233,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 9237,
    "velocity": 87
  },
  {
    "note": 58,
    "time": 9237,
    "velocity": 81
  },
  {
    "note": 70,
    "time": 9237,
    "velocity": 80
  },
  {
    "note": 82,
    "time": 9276,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 9276,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 9276,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 9280,
    "velocity": 113
  },
  {
    "note": 86,
    "time": 9280,
    "velocity": 111
  },
  {
    "note": 62,
    "time": 9280,
    "velocity": 60
  },
  {
    "note": 74,
    "time": 9318,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 9318,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 9318,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 9322,
    "velocity": 116
  },
  {
    "note": 89,
    "time": 9322,
    "velocity": 114
  },
  {
    "note": 65,
    "time": 9322,
    "velocity": 77
  },
  {
    "note": 77,
    "time": 9361,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 9361,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 9361,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 9365,
    "velocity": 86
  },
  {
    "note": 58,
    "time": 9365,
    "velocity": 86
  },
  {
    "note": 70,
    "time": 9365,
    "velocity": 84
  },
  {
    "note": 82,
    "time": 9404,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 9404,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 9404,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 9408,
    "velocity": 113
  },
  {
    "note": 84,
    "time": 9408,
    "velocity": 111
  },
  {
    "note": 60,
    "time": 9408,
    "velocity": 62
  },
  {
    "note": 72,
    "time": 9446,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 9446,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 9446,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 9450,
    "velocity": 114
  },
  {
    "note": 88,
    "time": 9450,
    "velocity": 117
  },
  {
    "note": 64,
    "time": 9450,
    "velocity": 86
  },
  {
    "note": 76,
    "time": 9489,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 9489,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 9489,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 9493,
    "velocity": 89
  },
  {
    "note": 57,
    "time": 9493,
    "velocity": 93
  },
  {
    "note": 69,
    "time": 9493,
    "velocity": 95
  },
  {
    "note": 81,
    "time": 9532,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 9532,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 9532,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 9536,
    "velocity": 111
  },
  {
    "note": 84,
    "time": 9536,
    "velocity": 111
  },
  {
    "note": 60,
    "time": 9536,
    "velocity": 67
  },
  {
    "note": 72,
    "time": 9574,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 9574,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 9574,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 9578,
    "velocity": 116
  },
  {
    "note": 88,
    "time": 9578,
    "velocity": 117
  },
  {
    "note": 64,
    "time": 9578,
    "velocity": 94
  },
  {
    "note": 76,
    "time": 9617,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 9617,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 9617,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 9621,
    "velocity": 88
  },
  {
    "note": 57,
    "time": 9621,
    "velocity": 100
  },
  {
    "note": 69,
    "time": 9621,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 9660,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 9660,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 9660,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 9664,
    "velocity": 112
  },
  {
    "note": 82,
    "time": 9664,
    "velocity": 112
  },
  {
    "note": 58,
    "time": 9664,
    "velocity": 70
  },
  {
    "note": 70,
    "time": 9702,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 9702,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 9702,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 9706,
    "velocity": 117
  },
  {
    "note": 86,
    "time": 9706,
    "velocity": 117
  },
  {
    "note": 62,
    "time": 9706,
    "velocity": 96
  },
  {
    "note": 74,
    "time": 9745,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 9745,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 9745,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 9749,
    "velocity": 92
  },
  {
    "note": 55,
    "time": 9749,
    "velocity": 106
  },
  {
    "note": 67,
    "time": 9749,
    "velocity": 108
  },
  {
    "note": 79,
    "time": 9788,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 9788,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 9788,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 9792,
    "velocity": 112
  },
  {
    "note": 82,
    "time": 9792,
    "velocity": 112
  },
  {
    "note": 58,
    "time": 9792,
    "velocity": 76
  },
  {
    "note": 70,
    "time": 9830,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 9830,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 9830,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 9834,
    "velocity": 121
  },
  {
    "note": 86,
    "time": 9834,
    "velocity": 120
  },
  {
    "note": 62,
    "time": 9834,
    "velocity": 103
  },
  {
    "note": 74,
    "time": 9873,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 9873,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 9873,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 9877,
    "velocity": 89
  },
  {
    "note": 55,
    "time": 9877,
    "velocity": 112
  },
  {
    "note": 67,
    "time": 9877,
    "velocity": 114
  },
  {
    "note": 79,
    "time": 9916,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 9916,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 9916,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 9920,
    "velocity": 114
  },
  {
    "note": 81,
    "time": 9920,
    "velocity": 116
  },
  {
    "note": 57,
    "time": 9920,
    "velocity": 81
  },
  {
    "note": 69,
    "time": 9958,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 9958,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 9958,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 9962,
    "velocity": 121
  },
  {
    "note": 84,
    "time": 9962,
    "velocity": 120
  },
  {
    "note": 60,
    "time": 9962,
    "velocity": 108
  },
  {
    "note": 72,
    "time": 10001,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 10001,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 10001,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 10005,
    "velocity": 90
  },
  {
    "note": 53,
    "time": 10005,
    "velocity": 118
  },
  {
    "note": 65,
    "time": 10005,
    "velocity": 118
  },
  {
    "note": 77,
    "time": 10044,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 10044,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 10044,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 10048,
    "velocity": 121
  },
  {
    "note": 81,
    "time": 10048,
    "velocity": 119
  },
  {
    "note": 57,
    "time": 10048,
    "velocity": 90
  },
  {
    "note": 69,
    "time": 10086,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 10086,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 10086,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 10090,
    "velocity": 123
  },
  {
    "note": 84,
    "time": 10090,
    "velocity": 122
  },
  {
    "note": 60,
    "time": 10090,
    "velocity": 117
  },
  {
    "note": 72,
    "time": 10129,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 10129,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 10129,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 10133,
    "velocity": 92
  },
  {
    "note": 53,
    "time": 10133,
    "velocity": 127
  },
  {
    "note": 65,
    "time": 10133,
    "velocity": 127
  },
  {
    "note": 77,
    "time": 10172,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 10172,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 10172,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 10176,
    "velocity": 118
  },
  {
    "note": 79,
    "time": 10176,
    "velocity": 118
  },
  {
    "note": 55,
    "time": 10176,
    "velocity": 91
  },
  {
    "note": 67,
    "time": 10214,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 10214,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 10214,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 10218,
    "velocity": 121
  },
  {
    "note": 82,
    "time": 10218,
    "velocity": 122
  },
  {
    "note": 58,
    "time": 10218,
    "velocity": 121
  },
  {
    "note": 70,
    "time": 10257,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 10257,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 10257,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 10261,
    "velocity": 97
  },
  {
    "note": 52,
    "time": 10261,
    "velocity": 125
  },
  {
    "note": 64,
    "time": 10261,
    "velocity": 126
  },
  {
    "note": 76,
    "time": 10300,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 10300,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 10300,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 10304,
    "velocity": 121
  },
  {
    "note": 79,
    "time": 10304,
    "velocity": 121
  },
  {
    "note": 55,
    "time": 10304,
    "velocity": 95
  },
  {
    "note": 67,
    "time": 10342,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 10342,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 10342,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 10346,
    "velocity": 122
  },
  {
    "note": 82,
    "time": 10346,
    "velocity": 121
  },
  {
    "note": 58,
    "time": 10346,
    "velocity": 127
  },
  {
    "note": 70,
    "time": 10385,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 10385,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 10385,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 10389,
    "velocity": 95
  },
  {
    "note": 52,
    "time": 10389,
    "velocity": 127
  },
  {
    "note": 64,
    "time": 10389,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 10428,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 10428,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 10428,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 10432,
    "velocity": 121
  },
  {
    "note": 77,
    "time": 10432,
    "velocity": 120
  },
  {
    "note": 53,
    "time": 10432,
    "velocity": 99
  },
  {
    "note": 65,
    "time": 10470,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 10470,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 10470,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 10474,
    "velocity": 124
  },
  {
    "note": 81,
    "time": 10474,
    "velocity": 125
  },
  {
    "note": 57,
    "time": 10474,
    "velocity": 127
  },
  {
    "note": 69,
    "time": 10513,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 10513,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 10513,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 10517,
    "velocity": 96
  },
  {
    "note": 50,
    "time": 10517,
    "velocity": 126
  },
  {
    "note": 62,
    "time": 10517,
    "velocity": 126
  },
  {
    "note": 74,
    "time": 10556,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 10556,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 10556,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 10560,
    "velocity": 120
  },
  {
    "note": 77,
    "time": 10560,
    "velocity": 122
  },
  {
    "note": 53,
    "time": 10560,
    "velocity": 103
  },
  {
    "note": 65,
    "time": 10598,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 10598,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 10598,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 10602,
    "velocity": 126
  },
  {
    "note": 81,
    "time": 10602,
    "velocity": 127
  },
  {
    "note": 57,
    "time": 10602,
    "velocity": 127
  },
  {
    "note": 69,
    "time": 10641,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 10641,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 10641,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 10645,
    "velocity": 95
  },
  {
    "note": 50,
    "time": 10645,
    "velocity": 126
  },
  {
    "note": 62,
    "time": 10645,
    "velocity": 125
  },
  {
    "note": 74,
    "time": 10684,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 10684,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 10684,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 10688,
    "velocity": 122
  },
  {
    "note": 76,
    "time": 10688,
    "velocity": 123
  },
  {
    "note": 52,
    "time": 10688,
    "velocity": 100
  },
  {
    "note": 64,
    "time": 10726,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 10726,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 10726,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 10730,
    "velocity": 124
  },
  {
    "note": 79,
    "time": 10730,
    "velocity": 124
  },
  {
    "note": 55,
    "time": 10730,
    "velocity": 127
  },
  {
    "note": 67,
    "time": 10769,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 10769,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 10769,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 10773,
    "velocity": 99
  },
  {
    "note": 48,
    "time": 10773,
    "velocity": 126
  },
  {
    "note": 60,
    "time": 10773,
    "velocity": 127
  },
  {
    "note": 72,
    "time": 10812,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 10812,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 10812,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 10816,
    "velocity": 126
  },
  {
    "note": 76,
    "time": 10816,
    "velocity": 127
  },
  {
    "note": 52,
    "time": 10816,
    "velocity": 105
  },
  {
    "note": 64,
    "time": 10854,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 10854,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 10854,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 10858,
    "velocity": 126
  },
  {
    "note": 79,
    "time": 10858,
    "velocity": 125
  },
  {
    "note": 55,
    "time": 10858,
    "velocity": 127
  },
  {
    "note": 67,
    "time": 10897,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 10897,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 10897,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 10901,
    "velocity": 98
  },
  {
    "note": 48,
    "time": 10901,
    "velocity": 127
  },
  {
    "note": 60,
    "time": 10901,
    "velocity": 127
  },
  {
    "note": 72,
    "time": 10940,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 10940,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 10940,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 10944,
    "velocity": 107
  },
  {
    "note": 38,
    "time": 10944,
    "velocity": 106
  },
  {
    "note": 70,
    "time": 11200,
    "velocity": 112
  },
  {
    "note": 73,
    "time": 11200,
    "velocity": 111
  },
  {
    "note": 76,
    "time": 11200,
    "velocity": 112
  },
  {
    "note": 79,
    "time": 11200,
    "velocity": 113
  },
  {
    "note": 82,
    "time": 11200,
    "velocity": 115
  },
  {
    "note": 50,
    "time": 11200,
    "velocity": 115
  },
  {
    "note": 55,
    "time": 11200,
    "velocity": 113
  },
  {
    "note": 58,
    "time": 11200,
    "velocity": 112
  },
  {
    "note": 61,
    "time": 11200,
    "velocity": 113
  },
  {
    "note": 64,
    "time": 11200,
    "velocity": 112
  },
  {
    "note": 26,
    "time": 11406,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 11406,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 11687,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 11741,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 11741,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 11744,
    "velocity": 114
  },
  {
    "note": 69,
    "time": 11744,
    "velocity": 113
  },
  {
    "note": 81,
    "time": 11773,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 11773,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 11776,
    "velocity": 111
  },
  {
    "note": 67,
    "time": 11776,
    "velocity": 115
  },
  {
    "note": 79,
    "time": 11805,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 11805,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 11808,
    "velocity": 110
  },
  {
    "note": 65,
    "time": 11808,
    "velocity": 117
  },
  {
    "note": 77,
    "time": 11837,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 11837,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 11840,
    "velocity": 112
  },
  {
    "note": 64,
    "time": 11840,
    "velocity": 120
  },
  {
    "note": 76,
    "time": 11869,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 11869,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 11872,
    "velocity": 109
  },
  {
    "note": 62,
    "time": 11872,
    "velocity": 115
  },
  {
    "note": 74,
    "time": 11901,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 11901,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 11904,
    "velocity": 113
  },
  {
    "note": 61,
    "time": 11904,
    "velocity": 120
  },
  {
    "note": 73,
    "time": 11933,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 11933,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 11936,
    "velocity": 112
  },
  {
    "note": 59,
    "time": 11936,
    "velocity": 119
  },
  {
    "note": 71,
    "time": 11965,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 11965,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 11968,
    "velocity": 127
  },
  {
    "note": 61,
    "time": 11968,
    "velocity": 127
  },
  {
    "note": 73,
    "time": 12026,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 12026,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 12032,
    "velocity": 107
  },
  {
    "note": 57,
    "time": 12032,
    "velocity": 115
  },
  {
    "note": 69,
    "time": 12090,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 12090,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 12096,
    "velocity": 127
  },
  {
    "note": 61,
    "time": 12096,
    "velocity": 126
  },
  {
    "note": 73,
    "time": 12154,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 12154,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 12160,
    "velocity": 126
  },
  {
    "note": 64,
    "time": 12160,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 12189,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 12189,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 12192,
    "velocity": 127
  },
  {
    "note": 67,
    "time": 12192,
    "velocity": 127
  },
  {
    "note": 79,
    "time": 12221,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 12221,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 12224,
    "velocity": 119
  },
  {
    "note": 65,
    "time": 12224,
    "velocity": 123
  },
  {
    "note": 77,
    "time": 12243,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 12243,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 12245,
    "velocity": 127
  },
  {
    "note": 67,
    "time": 12245,
    "velocity": 127
  },
  {
    "note": 79,
    "time": 12264,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 12264,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 12266,
    "velocity": 111
  },
  {
    "note": 65,
    "time": 12266,
    "velocity": 120
  },
  {
    "note": 77,
    "time": 12286,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 12286,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 12288,
    "velocity": 124
  },
  {
    "note": 67,
    "time": 12288,
    "velocity": 126
  },
  {
    "note": 79,
    "time": 12307,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 12307,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 12309,
    "velocity": 113
  },
  {
    "note": 65,
    "time": 12309,
    "velocity": 118
  },
  {
    "note": 77,
    "time": 12328,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 12328,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 12330,
    "velocity": 127
  },
  {
    "note": 67,
    "time": 12330,
    "velocity": 127
  },
  {
    "note": 79,
    "time": 12350,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 12350,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 12352,
    "velocity": 114
  },
  {
    "note": 65,
    "time": 12352,
    "velocity": 121
  },
  {
    "note": 77,
    "time": 12410,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 12410,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 12416,
    "velocity": 111
  },
  {
    "note": 64,
    "time": 12416,
    "velocity": 117
  },
  {
    "note": 76,
    "time": 12474,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 12474,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 12480,
    "velocity": 127
  },
  {
    "note": 69,
    "time": 12480,
    "velocity": 127
  },
  {
    "note": 74,
    "time": 12480,
    "velocity": 127
  },
  {
    "note": 77,
    "time": 12480,
    "velocity": 127
  },
  {
    "note": 38,
    "time": 12480,
    "velocity": 92
  },
  {
    "note": 41,
    "time": 12480,
    "velocity": 94
  },
  {
    "note": 45,
    "time": 12480,
    "velocity": 94
  },
  {
    "note": 50,
    "time": 12480,
    "velocity": 94
  },
  {
    "note": 65,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 12711,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 12928,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 12928,
    "velocity": 72
  },
  {
    "note": 69,
    "time": 12928,
    "velocity": 70
  },
  {
    "note": 81,
    "time": 12986,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 12986,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 12992,
    "velocity": 68
  },
  {
    "note": 86,
    "time": 12992,
    "velocity": 66
  },
  {
    "note": 74,
    "time": 12992,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 12992,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 12992,
    "velocity": 93
  },
  {
    "note": 74,
    "time": 13021,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 13021,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 13024,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 13024,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13024,
    "velocity": 95
  },
  {
    "note": 57,
    "time": 13024,
    "velocity": 69
  },
  {
    "note": 62,
    "time": 13050,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13053,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13053,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 13056,
    "velocity": 80
  },
  {
    "note": 88,
    "time": 13056,
    "velocity": 83
  },
  {
    "note": 76,
    "time": 13056,
    "velocity": 71
  },
  {
    "note": 64,
    "time": 13056,
    "velocity": 81
  },
  {
    "note": 64,
    "time": 13056,
    "velocity": 94
  },
  {
    "note": 76,
    "time": 13085,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 13085,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 13088,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 13088,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13088,
    "velocity": 88
  },
  {
    "note": 57,
    "time": 13088,
    "velocity": 66
  },
  {
    "note": 64,
    "time": 13114,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13117,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13117,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 13120,
    "velocity": 85
  },
  {
    "note": 89,
    "time": 13120,
    "velocity": 83
  },
  {
    "note": 77,
    "time": 13120,
    "velocity": 73
  },
  {
    "note": 65,
    "time": 13120,
    "velocity": 85
  },
  {
    "note": 65,
    "time": 13120,
    "velocity": 94
  },
  {
    "note": 77,
    "time": 13149,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 13149,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 13152,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 13152,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13152,
    "velocity": 89
  },
  {
    "note": 57,
    "time": 13152,
    "velocity": 67
  },
  {
    "note": 65,
    "time": 13178,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13181,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13181,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 13184,
    "velocity": 75
  },
  {
    "note": 86,
    "time": 13184,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 13184,
    "velocity": 65
  },
  {
    "note": 62,
    "time": 13184,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 13184,
    "velocity": 87
  },
  {
    "note": 74,
    "time": 13213,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 13213,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 13216,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 13216,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13216,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 13216,
    "velocity": 70
  },
  {
    "note": 62,
    "time": 13242,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13245,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13245,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 13248,
    "velocity": 88
  },
  {
    "note": 88,
    "time": 13248,
    "velocity": 86
  },
  {
    "note": 76,
    "time": 13248,
    "velocity": 74
  },
  {
    "note": 64,
    "time": 13248,
    "velocity": 89
  },
  {
    "note": 64,
    "time": 13248,
    "velocity": 94
  },
  {
    "note": 76,
    "time": 13277,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 13277,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 13280,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 13280,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13280,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 13280,
    "velocity": 67
  },
  {
    "note": 64,
    "time": 13306,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13309,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13309,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 13312,
    "velocity": 83
  },
  {
    "note": 89,
    "time": 13312,
    "velocity": 83
  },
  {
    "note": 77,
    "time": 13312,
    "velocity": 72
  },
  {
    "note": 65,
    "time": 13312,
    "velocity": 83
  },
  {
    "note": 65,
    "time": 13312,
    "velocity": 95
  },
  {
    "note": 77,
    "time": 13341,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 13341,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 13344,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 13344,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13344,
    "velocity": 87
  },
  {
    "note": 57,
    "time": 13344,
    "velocity": 66
  },
  {
    "note": 65,
    "time": 13370,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13373,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13373,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 13376,
    "velocity": 85
  },
  {
    "note": 91,
    "time": 13376,
    "velocity": 83
  },
  {
    "note": 79,
    "time": 13376,
    "velocity": 78
  },
  {
    "note": 67,
    "time": 13376,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 13376,
    "velocity": 94
  },
  {
    "note": 79,
    "time": 13405,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 13405,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 13408,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 13408,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13408,
    "velocity": 84
  },
  {
    "note": 57,
    "time": 13408,
    "velocity": 63
  },
  {
    "note": 67,
    "time": 13434,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13437,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13437,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 13440,
    "velocity": 72
  },
  {
    "note": 88,
    "time": 13440,
    "velocity": 72
  },
  {
    "note": 76,
    "time": 13440,
    "velocity": 68
  },
  {
    "note": 64,
    "time": 13440,
    "velocity": 74
  },
  {
    "note": 64,
    "time": 13440,
    "velocity": 92
  },
  {
    "note": 69,
    "time": 13454,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 13469,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 13469,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 13472,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 13472,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13472,
    "velocity": 90
  },
  {
    "note": 57,
    "time": 13472,
    "velocity": 65
  },
  {
    "note": 64,
    "time": 13498,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13501,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13501,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 13504,
    "velocity": 88
  },
  {
    "note": 89,
    "time": 13504,
    "velocity": 85
  },
  {
    "note": 65,
    "time": 13504,
    "velocity": 97
  },
  {
    "note": 65,
    "time": 13533,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13536,
    "velocity": 73
  },
  {
    "note": 57,
    "time": 13536,
    "velocity": 68
  },
  {
    "note": 77,
    "time": 13562,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 13562,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13565,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 13568,
    "velocity": 84
  },
  {
    "note": 91,
    "time": 13568,
    "velocity": 84
  },
  {
    "note": 67,
    "time": 13568,
    "velocity": 96
  },
  {
    "note": 81,
    "time": 13594,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 13597,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13600,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 13600,
    "velocity": 62
  },
  {
    "note": 79,
    "time": 13626,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 13626,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13629,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13632,
    "velocity": 86
  },
  {
    "note": 93,
    "time": 13632,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 13632,
    "velocity": 100
  },
  {
    "note": 81,
    "time": 13658,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 13661,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13664,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 13664,
    "velocity": 61
  },
  {
    "note": 81,
    "time": 13690,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 13690,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13693,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 13696,
    "velocity": 69
  },
  {
    "note": 89,
    "time": 13696,
    "velocity": 70
  },
  {
    "note": 65,
    "time": 13696,
    "velocity": 92
  },
  {
    "note": 81,
    "time": 13722,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 13725,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13728,
    "velocity": 81
  },
  {
    "note": 57,
    "time": 13728,
    "velocity": 68
  },
  {
    "note": 77,
    "time": 13754,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 13754,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13757,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 13760,
    "velocity": 86
  },
  {
    "note": 91,
    "time": 13760,
    "velocity": 88
  },
  {
    "note": 67,
    "time": 13760,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 13786,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 13789,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13792,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 13792,
    "velocity": 64
  },
  {
    "note": 79,
    "time": 13818,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 13818,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13821,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13824,
    "velocity": 86
  },
  {
    "note": 93,
    "time": 13824,
    "velocity": 84
  },
  {
    "note": 69,
    "time": 13824,
    "velocity": 97
  },
  {
    "note": 81,
    "time": 13850,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 13853,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13856,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 13856,
    "velocity": 62
  },
  {
    "note": 81,
    "time": 13882,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 13882,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13885,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 13888,
    "velocity": 84
  },
  {
    "note": 94,
    "time": 13888,
    "velocity": 84
  },
  {
    "note": 70,
    "time": 13888,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 13914,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 13917,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13920,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 13920,
    "velocity": 61
  },
  {
    "note": 82,
    "time": 13946,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 13946,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 13949,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 13952,
    "velocity": 75
  },
  {
    "note": 91,
    "time": 13952,
    "velocity": 73
  },
  {
    "note": 67,
    "time": 13952,
    "velocity": 95
  },
  {
    "note": 81,
    "time": 13978,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 13981,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 13984,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 13984,
    "velocity": 62
  },
  {
    "note": 79,
    "time": 14010,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 14010,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14013,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14016,
    "velocity": 88
  },
  {
    "note": 93,
    "time": 14016,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 14016,
    "velocity": 70
  },
  {
    "note": 69,
    "time": 14016,
    "velocity": 103
  },
  {
    "note": 81,
    "time": 14042,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14045,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14048,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 14048,
    "velocity": 60
  },
  {
    "note": 81,
    "time": 14074,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 14074,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14077,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 14080,
    "velocity": 69
  },
  {
    "note": 89,
    "time": 14080,
    "velocity": 72
  },
  {
    "note": 65,
    "time": 14080,
    "velocity": 93
  },
  {
    "note": 81,
    "time": 14106,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 14109,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14112,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 14112,
    "velocity": 66
  },
  {
    "note": 77,
    "time": 14138,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 14138,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14141,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 14144,
    "velocity": 83
  },
  {
    "note": 91,
    "time": 14144,
    "velocity": 83
  },
  {
    "note": 67,
    "time": 14144,
    "velocity": 94
  },
  {
    "note": 81,
    "time": 14170,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 14173,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14176,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 14176,
    "velocity": 61
  },
  {
    "note": 79,
    "time": 14202,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 14202,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14205,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 14208,
    "velocity": 72
  },
  {
    "note": 88,
    "time": 14208,
    "velocity": 74
  },
  {
    "note": 64,
    "time": 14208,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 14234,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 14237,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14240,
    "velocity": 82
  },
  {
    "note": 57,
    "time": 14240,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 14266,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 14266,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14269,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 14272,
    "velocity": 87
  },
  {
    "note": 89,
    "time": 14272,
    "velocity": 87
  },
  {
    "note": 65,
    "time": 14272,
    "velocity": 95
  },
  {
    "note": 81,
    "time": 14298,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 14301,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14304,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 14304,
    "velocity": 67
  },
  {
    "note": 77,
    "time": 14330,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 14330,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14333,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 14336,
    "velocity": 71
  },
  {
    "note": 86,
    "time": 14336,
    "velocity": 72
  },
  {
    "note": 62,
    "time": 14336,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 14362,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 14365,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14368,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 14368,
    "velocity": 70
  },
  {
    "note": 74,
    "time": 14394,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 14394,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14397,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 14400,
    "velocity": 84
  },
  {
    "note": 88,
    "time": 14400,
    "velocity": 81
  },
  {
    "note": 64,
    "time": 14400,
    "velocity": 94
  },
  {
    "note": 81,
    "time": 14426,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 14429,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14432,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 14432,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 14458,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 14458,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14461,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 14464,
    "velocity": 72
  },
  {
    "note": 85,
    "time": 14464,
    "velocity": 73
  },
  {
    "note": 61,
    "time": 14464,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 14478,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14490,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 14493,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14496,
    "velocity": 81
  },
  {
    "note": 57,
    "time": 14496,
    "velocity": 70
  },
  {
    "note": 73,
    "time": 14522,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 14522,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14525,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14525,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 14528,
    "velocity": 104
  },
  {
    "note": 86,
    "time": 14528,
    "velocity": 103
  },
  {
    "note": 62,
    "time": 14528,
    "velocity": 93
  },
  {
    "note": 62,
    "time": 14557,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14560,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 14560,
    "velocity": 69
  },
  {
    "note": 74,
    "time": 14586,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 14586,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14589,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14589,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14592,
    "velocity": 72
  },
  {
    "note": 69,
    "time": 14592,
    "velocity": 98
  },
  {
    "note": 69,
    "time": 14621,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14624,
    "velocity": 73
  },
  {
    "note": 57,
    "time": 14624,
    "velocity": 61
  },
  {
    "note": 81,
    "time": 14650,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14653,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 14656,
    "velocity": 82
  },
  {
    "note": 70,
    "time": 14656,
    "velocity": 100
  },
  {
    "note": 69,
    "time": 14682,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 14685,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14688,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 14688,
    "velocity": 62
  },
  {
    "note": 82,
    "time": 14714,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14717,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 14720,
    "velocity": 74
  },
  {
    "note": 67,
    "time": 14720,
    "velocity": 94
  },
  {
    "note": 69,
    "time": 14746,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 14749,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14752,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 14752,
    "velocity": 62
  },
  {
    "note": 79,
    "time": 14778,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14781,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 14784,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 14784,
    "velocity": 102
  },
  {
    "note": 69,
    "time": 14810,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14813,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14816,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 14816,
    "velocity": 61
  },
  {
    "note": 81,
    "time": 14842,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14845,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 14848,
    "velocity": 73
  },
  {
    "note": 65,
    "time": 14848,
    "velocity": 93
  },
  {
    "note": 69,
    "time": 14874,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 14877,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14880,
    "velocity": 81
  },
  {
    "note": 57,
    "time": 14880,
    "velocity": 65
  },
  {
    "note": 77,
    "time": 14906,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14909,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 14912,
    "velocity": 83
  },
  {
    "note": 67,
    "time": 14912,
    "velocity": 95
  },
  {
    "note": 69,
    "time": 14938,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 14941,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 14944,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 14944,
    "velocity": 65
  },
  {
    "note": 79,
    "time": 14970,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 14973,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 14976,
    "velocity": 73
  },
  {
    "note": 64,
    "time": 14976,
    "velocity": 90
  },
  {
    "note": 69,
    "time": 15002,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 15005,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15008,
    "velocity": 82
  },
  {
    "note": 57,
    "time": 15008,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 15034,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15037,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15037,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 15040,
    "velocity": 87
  },
  {
    "note": 65,
    "time": 15040,
    "velocity": 96
  },
  {
    "note": 65,
    "time": 15069,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15072,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 15072,
    "velocity": 65
  },
  {
    "note": 77,
    "time": 15098,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15101,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15101,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 15104,
    "velocity": 71
  },
  {
    "note": 69,
    "time": 15104,
    "velocity": 78
  },
  {
    "note": 62,
    "time": 15104,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 15133,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 15133,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15136,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 15136,
    "velocity": 68
  },
  {
    "note": 74,
    "time": 15162,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15165,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15165,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 15168,
    "velocity": 90
  },
  {
    "note": 69,
    "time": 15168,
    "velocity": 81
  },
  {
    "note": 67,
    "time": 15168,
    "velocity": 97
  },
  {
    "note": 69,
    "time": 15197,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 15197,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15200,
    "velocity": 82
  },
  {
    "note": 57,
    "time": 15200,
    "velocity": 63
  },
  {
    "note": 79,
    "time": 15226,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15229,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15229,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 15232,
    "velocity": 73
  },
  {
    "note": 69,
    "time": 15232,
    "velocity": 81
  },
  {
    "note": 64,
    "time": 15232,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 15261,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 15261,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15264,
    "velocity": 82
  },
  {
    "note": 57,
    "time": 15264,
    "velocity": 69
  },
  {
    "note": 76,
    "time": 15290,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15293,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15293,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 15296,
    "velocity": 88
  },
  {
    "note": 69,
    "time": 15296,
    "velocity": 85
  },
  {
    "note": 65,
    "time": 15296,
    "velocity": 95
  },
  {
    "note": 69,
    "time": 15325,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 15325,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15328,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 15328,
    "velocity": 64
  },
  {
    "note": 77,
    "time": 15354,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15357,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15357,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 15360,
    "velocity": 73
  },
  {
    "note": 69,
    "time": 15360,
    "velocity": 79
  },
  {
    "note": 62,
    "time": 15360,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 15389,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 15389,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15392,
    "velocity": 81
  },
  {
    "note": 57,
    "time": 15392,
    "velocity": 71
  },
  {
    "note": 74,
    "time": 15418,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15421,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15421,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 15424,
    "velocity": 82
  },
  {
    "note": 69,
    "time": 15424,
    "velocity": 78
  },
  {
    "note": 64,
    "time": 15424,
    "velocity": 93
  },
  {
    "note": 69,
    "time": 15453,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 15453,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15456,
    "velocity": 81
  },
  {
    "note": 57,
    "time": 15456,
    "velocity": 66
  },
  {
    "note": 76,
    "time": 15482,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15485,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15485,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 15488,
    "velocity": 73
  },
  {
    "note": 69,
    "time": 15488,
    "velocity": 81
  },
  {
    "note": 61,
    "time": 15488,
    "velocity": 88
  },
  {
    "note": 69,
    "time": 15517,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 15517,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15520,
    "velocity": 82
  },
  {
    "note": 57,
    "time": 15520,
    "velocity": 72
  },
  {
    "note": 73,
    "time": 15546,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15549,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15549,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 15552,
    "velocity": 84
  },
  {
    "note": 69,
    "time": 15552,
    "velocity": 81
  },
  {
    "note": 62,
    "time": 15552,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 15581,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 15581,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15584,
    "velocity": 80
  },
  {
    "note": 57,
    "time": 15584,
    "velocity": 70
  },
  {
    "note": 74,
    "time": 15610,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15613,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15613,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15616,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 15616,
    "velocity": 67
  },
  {
    "note": 57,
    "time": 15645,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15645,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15648,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 15648,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 15677,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 15677,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 15680,
    "velocity": 63
  },
  {
    "note": 70,
    "time": 15680,
    "velocity": 64
  },
  {
    "note": 58,
    "time": 15709,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 15709,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15712,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 15712,
    "velocity": 100
  },
  {
    "note": 69,
    "time": 15741,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 15741,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 15744,
    "velocity": 64
  },
  {
    "note": 67,
    "time": 15744,
    "velocity": 61
  },
  {
    "note": 55,
    "time": 15773,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 15773,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15776,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 15776,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 15805,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 15805,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 15808,
    "velocity": 64
  },
  {
    "note": 69,
    "time": 15808,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 15837,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15837,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15840,
    "velocity": 103
  },
  {
    "note": 81,
    "time": 15840,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 15869,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 15869,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 15872,
    "velocity": 63
  },
  {
    "note": 65,
    "time": 15872,
    "velocity": 64
  },
  {
    "note": 53,
    "time": 15901,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 15901,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15904,
    "velocity": 102
  },
  {
    "note": 81,
    "time": 15904,
    "velocity": 104
  },
  {
    "note": 69,
    "time": 15933,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 15933,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 15936,
    "velocity": 64
  },
  {
    "note": 67,
    "time": 15936,
    "velocity": 63
  },
  {
    "note": 55,
    "time": 15965,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 15965,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 15968,
    "velocity": 105
  },
  {
    "note": 81,
    "time": 15968,
    "velocity": 107
  },
  {
    "note": 69,
    "time": 15997,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 15997,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 16000,
    "velocity": 66
  },
  {
    "note": 64,
    "time": 16000,
    "velocity": 67
  },
  {
    "note": 52,
    "time": 16029,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 16029,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16032,
    "velocity": 108
  },
  {
    "note": 81,
    "time": 16032,
    "velocity": 107
  },
  {
    "note": 69,
    "time": 16061,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16061,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 16064,
    "velocity": 68
  },
  {
    "note": 65,
    "time": 16064,
    "velocity": 70
  },
  {
    "note": 53,
    "time": 16093,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 16093,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16096,
    "velocity": 109
  },
  {
    "note": 77,
    "time": 16096,
    "velocity": 109
  },
  {
    "note": 81,
    "time": 16096,
    "velocity": 110
  },
  {
    "note": 69,
    "time": 16125,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 16125,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16125,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 16128,
    "velocity": 67
  },
  {
    "note": 62,
    "time": 16128,
    "velocity": 69
  },
  {
    "note": 50,
    "time": 16157,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 16157,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16160,
    "velocity": 109
  },
  {
    "note": 74,
    "time": 16160,
    "velocity": 108
  },
  {
    "note": 81,
    "time": 16160,
    "velocity": 109
  },
  {
    "note": 69,
    "time": 16189,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 16189,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16189,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 16192,
    "velocity": 66
  },
  {
    "note": 67,
    "time": 16192,
    "velocity": 67
  },
  {
    "note": 55,
    "time": 16221,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 16221,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16224,
    "velocity": 110
  },
  {
    "note": 77,
    "time": 16224,
    "velocity": 110
  },
  {
    "note": 81,
    "time": 16224,
    "velocity": 111
  },
  {
    "note": 69,
    "time": 16253,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 16253,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16253,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 16256,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 16256,
    "velocity": 68
  },
  {
    "note": 52,
    "time": 16285,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 16285,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16288,
    "velocity": 110
  },
  {
    "note": 76,
    "time": 16288,
    "velocity": 114
  },
  {
    "note": 81,
    "time": 16288,
    "velocity": 110
  },
  {
    "note": 69,
    "time": 16317,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 16317,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16317,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 16320,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 16320,
    "velocity": 75
  },
  {
    "note": 65,
    "time": 16320,
    "velocity": 73
  },
  {
    "note": 53,
    "time": 16349,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 16349,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 16349,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16352,
    "velocity": 114
  },
  {
    "note": 77,
    "time": 16352,
    "velocity": 115
  },
  {
    "note": 81,
    "time": 16352,
    "velocity": 112
  },
  {
    "note": 69,
    "time": 16381,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 16381,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16381,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 16384,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 16384,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 16384,
    "velocity": 72
  },
  {
    "note": 50,
    "time": 16413,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 16413,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 16413,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16416,
    "velocity": 118
  },
  {
    "note": 74,
    "time": 16416,
    "velocity": 116
  },
  {
    "note": 81,
    "time": 16416,
    "velocity": 115
  },
  {
    "note": 69,
    "time": 16445,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 16445,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16445,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 16448,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 16448,
    "velocity": 72
  },
  {
    "note": 64,
    "time": 16448,
    "velocity": 71
  },
  {
    "note": 52,
    "time": 16477,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 16477,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 16477,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16480,
    "velocity": 115
  },
  {
    "note": 76,
    "time": 16480,
    "velocity": 117
  },
  {
    "note": 81,
    "time": 16480,
    "velocity": 116
  },
  {
    "note": 69,
    "time": 16509,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 16509,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16509,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 16512,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 16512,
    "velocity": 74
  },
  {
    "note": 61,
    "time": 16512,
    "velocity": 72
  },
  {
    "note": 49,
    "time": 16541,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 16541,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 16541,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16544,
    "velocity": 120
  },
  {
    "note": 73,
    "time": 16544,
    "velocity": 119
  },
  {
    "note": 81,
    "time": 16544,
    "velocity": 119
  },
  {
    "note": 69,
    "time": 16573,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 16573,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16573,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 16576,
    "velocity": 85
  },
  {
    "note": 62,
    "time": 16576,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 16576,
    "velocity": 84
  },
  {
    "note": 50,
    "time": 16692,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 16692,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 16692,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 16704,
    "velocity": 82
  },
  {
    "note": 62,
    "time": 16704,
    "velocity": 69
  },
  {
    "note": 74,
    "time": 16704,
    "velocity": 73
  },
  {
    "note": 82,
    "time": 16733,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 16733,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 16733,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 16736,
    "velocity": 112
  },
  {
    "note": 65,
    "time": 16736,
    "velocity": 61
  },
  {
    "note": 89,
    "time": 16765,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 16765,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 16768,
    "velocity": 111
  },
  {
    "note": 94,
    "time": 16768,
    "velocity": 112
  },
  {
    "note": 70,
    "time": 16768,
    "velocity": 86
  },
  {
    "note": 86,
    "time": 16797,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 16797,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 16797,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 16800,
    "velocity": 86
  },
  {
    "note": 65,
    "time": 16800,
    "velocity": 68
  },
  {
    "note": 89,
    "time": 16829,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 16829,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 16832,
    "velocity": 79
  },
  {
    "note": 60,
    "time": 16832,
    "velocity": 96
  },
  {
    "note": 72,
    "time": 16832,
    "velocity": 96
  },
  {
    "note": 81,
    "time": 16861,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 16861,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 16861,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 16864,
    "velocity": 109
  },
  {
    "note": 64,
    "time": 16864,
    "velocity": 66
  },
  {
    "note": 88,
    "time": 16893,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 16893,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 16896,
    "velocity": 109
  },
  {
    "note": 93,
    "time": 16896,
    "velocity": 109
  },
  {
    "note": 69,
    "time": 16896,
    "velocity": 87
  },
  {
    "note": 84,
    "time": 16925,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 16925,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 16925,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 16928,
    "velocity": 87
  },
  {
    "note": 64,
    "time": 16928,
    "velocity": 70
  },
  {
    "note": 88,
    "time": 16957,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 16957,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 16960,
    "velocity": 71
  },
  {
    "note": 58,
    "time": 16960,
    "velocity": 89
  },
  {
    "note": 70,
    "time": 16960,
    "velocity": 89
  },
  {
    "note": 79,
    "time": 16989,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 16989,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 16989,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 16992,
    "velocity": 110
  },
  {
    "note": 62,
    "time": 16992,
    "velocity": 65
  },
  {
    "note": 86,
    "time": 17021,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 17021,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 17024,
    "velocity": 112
  },
  {
    "note": 91,
    "time": 17024,
    "velocity": 113
  },
  {
    "note": 67,
    "time": 17024,
    "velocity": 88
  },
  {
    "note": 82,
    "time": 17053,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 17053,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 17053,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 17056,
    "velocity": 84
  },
  {
    "note": 62,
    "time": 17056,
    "velocity": 70
  },
  {
    "note": 86,
    "time": 17085,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 17085,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 17088,
    "velocity": 84
  },
  {
    "note": 57,
    "time": 17088,
    "velocity": 69
  },
  {
    "note": 81,
    "time": 17117,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 17117,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 17120,
    "velocity": 102
  },
  {
    "note": 64,
    "time": 17120,
    "velocity": 93
  },
  {
    "note": 85,
    "time": 17149,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 17149,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 17152,
    "velocity": 105
  },
  {
    "note": 61,
    "time": 17152,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 17152,
    "velocity": 90
  },
  {
    "note": 88,
    "time": 17181,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 17184,
    "velocity": 108
  },
  {
    "note": 93,
    "time": 17184,
    "velocity": 110
  },
  {
    "note": 61,
    "time": 17210,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 17210,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 17213,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 17213,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 17216,
    "velocity": 98
  },
  {
    "note": 38,
    "time": 17216,
    "velocity": 101
  },
  {
    "note": 50,
    "time": 17216,
    "velocity": 97
  },
  {
    "note": 58,
    "time": 17280,
    "velocity": 99
  },
  {
    "note": 65,
    "time": 17280,
    "velocity": 100
  },
  {
    "note": 70,
    "time": 17280,
    "velocity": 98
  },
  {
    "note": 50,
    "time": 17280,
    "velocity": 99
  },
  {
    "note": 53,
    "time": 17280,
    "velocity": 98
  },
  {
    "note": 62,
    "time": 17332,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 17332,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 17332,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 17338,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 17338,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 17338,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 17338,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 17338,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 17344,
    "velocity": 107
  },
  {
    "note": 36,
    "time": 17344,
    "velocity": 105
  },
  {
    "note": 48,
    "time": 17344,
    "velocity": 105
  },
  {
    "note": 57,
    "time": 17408,
    "velocity": 100
  },
  {
    "note": 64,
    "time": 17408,
    "velocity": 98
  },
  {
    "note": 69,
    "time": 17408,
    "velocity": 100
  },
  {
    "note": 48,
    "time": 17408,
    "velocity": 97
  },
  {
    "note": 52,
    "time": 17408,
    "velocity": 97
  },
  {
    "note": 60,
    "time": 17460,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 17460,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 17460,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 17466,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 17466,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 17466,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 17466,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 17466,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 17472,
    "velocity": 101
  },
  {
    "note": 34,
    "time": 17472,
    "velocity": 104
  },
  {
    "note": 46,
    "time": 17472,
    "velocity": 104
  },
  {
    "note": 55,
    "time": 17536,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 17536,
    "velocity": 100
  },
  {
    "note": 67,
    "time": 17536,
    "velocity": 97
  },
  {
    "note": 46,
    "time": 17536,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 17536,
    "velocity": 97
  },
  {
    "note": 58,
    "time": 17588,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 17588,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 17588,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 17594,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 17594,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 17594,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 17594,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 17594,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 17600,
    "velocity": 127
  },
  {
    "note": 61,
    "time": 17600,
    "velocity": 127
  },
  {
    "note": 64,
    "time": 17600,
    "velocity": 127
  },
  {
    "note": 69,
    "time": 17600,
    "velocity": 127
  },
  {
    "note": 33,
    "time": 17600,
    "velocity": 95
  },
  {
    "note": 45,
    "time": 17600,
    "velocity": 95
  },
  {
    "note": 57,
    "time": 17716,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 17716,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 17716,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 17716,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 17716,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 17716,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 17728,
    "velocity": 67
  },
  {
    "note": 62,
    "time": 17728,
    "velocity": 77
  },
  {
    "note": 74,
    "time": 17728,
    "velocity": 78
  },
  {
    "note": 82,
    "time": 17757,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 17757,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 17757,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 17760,
    "velocity": 80
  },
  {
    "note": 65,
    "time": 17760,
    "velocity": 47
  },
  {
    "note": 89,
    "time": 17789,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 17789,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 17792,
    "velocity": 81
  },
  {
    "note": 94,
    "time": 17792,
    "velocity": 82
  },
  {
    "note": 70,
    "time": 17792,
    "velocity": 51
  },
  {
    "note": 86,
    "time": 17821,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 17821,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 17821,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 17824,
    "velocity": 67
  },
  {
    "note": 65,
    "time": 17824,
    "velocity": 35
  },
  {
    "note": 89,
    "time": 17853,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 17853,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 17856,
    "velocity": 65
  },
  {
    "note": 60,
    "time": 17856,
    "velocity": 37
  },
  {
    "note": 72,
    "time": 17856,
    "velocity": 40
  },
  {
    "note": 81,
    "time": 17885,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 17885,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 17885,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 17888,
    "velocity": 92
  },
  {
    "note": 64,
    "time": 17888,
    "velocity": 24
  },
  {
    "note": 88,
    "time": 17917,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 17917,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 17920,
    "velocity": 93
  },
  {
    "note": 93,
    "time": 17920,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 17920,
    "velocity": 36
  },
  {
    "note": 84,
    "time": 17949,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 17949,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 17949,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 17952,
    "velocity": 71
  },
  {
    "note": 64,
    "time": 17952,
    "velocity": 29
  },
  {
    "note": 88,
    "time": 17981,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 17981,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 17984,
    "velocity": 62
  },
  {
    "note": 58,
    "time": 17984,
    "velocity": 36
  },
  {
    "note": 70,
    "time": 17984,
    "velocity": 37
  },
  {
    "note": 79,
    "time": 18013,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 18013,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 18013,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 18016,
    "velocity": 83
  },
  {
    "note": 62,
    "time": 18016,
    "velocity": 26
  },
  {
    "note": 86,
    "time": 18045,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 18045,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 18048,
    "velocity": 81
  },
  {
    "note": 91,
    "time": 18048,
    "velocity": 81
  },
  {
    "note": 67,
    "time": 18048,
    "velocity": 40
  },
  {
    "note": 82,
    "time": 18077,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 18077,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 18077,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 18080,
    "velocity": 57
  },
  {
    "note": 62,
    "time": 18080,
    "velocity": 34
  },
  {
    "note": 86,
    "time": 18109,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 18109,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 18112,
    "velocity": 56
  },
  {
    "note": 57,
    "time": 18112,
    "velocity": 38
  },
  {
    "note": 81,
    "time": 18141,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 18141,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 18144,
    "velocity": 62
  },
  {
    "note": 64,
    "time": 18144,
    "velocity": 47
  },
  {
    "note": 85,
    "time": 18173,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 18173,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 18176,
    "velocity": 59
  },
  {
    "note": 61,
    "time": 18176,
    "velocity": 52
  },
  {
    "note": 69,
    "time": 18176,
    "velocity": 51
  },
  {
    "note": 88,
    "time": 18205,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 18208,
    "velocity": 56
  },
  {
    "note": 93,
    "time": 18208,
    "velocity": 53
  },
  {
    "note": 61,
    "time": 18234,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 18234,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 18237,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 18237,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 18240,
    "velocity": 98
  },
  {
    "note": 38,
    "time": 18240,
    "velocity": 98
  },
  {
    "note": 50,
    "time": 18240,
    "velocity": 99
  },
  {
    "note": 58,
    "time": 18304,
    "velocity": 99
  },
  {
    "note": 65,
    "time": 18304,
    "velocity": 99
  },
  {
    "note": 70,
    "time": 18304,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 18304,
    "velocity": 100
  },
  {
    "note": 53,
    "time": 18304,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 18356,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 18356,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 18356,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 18362,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 18362,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 18362,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 18362,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 18362,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 18368,
    "velocity": 105
  },
  {
    "note": 36,
    "time": 18368,
    "velocity": 106
  },
  {
    "note": 48,
    "time": 18368,
    "velocity": 105
  },
  {
    "note": 57,
    "time": 18432,
    "velocity": 100
  },
  {
    "note": 64,
    "time": 18432,
    "velocity": 100
  },
  {
    "note": 69,
    "time": 18432,
    "velocity": 98
  },
  {
    "note": 48,
    "time": 18432,
    "velocity": 101
  },
  {
    "note": 52,
    "time": 18432,
    "velocity": 100
  },
  {
    "note": 60,
    "time": 18484,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 18484,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 18484,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 18490,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 18490,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 18490,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 18490,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 18490,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 18496,
    "velocity": 104
  },
  {
    "note": 34,
    "time": 18496,
    "velocity": 103
  },
  {
    "note": 46,
    "time": 18496,
    "velocity": 104
  },
  {
    "note": 55,
    "time": 18560,
    "velocity": 98
  },
  {
    "note": 62,
    "time": 18560,
    "velocity": 101
  },
  {
    "note": 67,
    "time": 18560,
    "velocity": 99
  },
  {
    "note": 46,
    "time": 18560,
    "velocity": 99
  },
  {
    "note": 50,
    "time": 18560,
    "velocity": 98
  },
  {
    "note": 58,
    "time": 18612,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 18612,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 18612,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 18618,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 18618,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 18618,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 18618,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 18618,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 18624,
    "velocity": 127
  },
  {
    "note": 61,
    "time": 18624,
    "velocity": 127
  },
  {
    "note": 64,
    "time": 18624,
    "velocity": 127
  },
  {
    "note": 69,
    "time": 18624,
    "velocity": 127
  },
  {
    "note": 33,
    "time": 18624,
    "velocity": 96
  },
  {
    "note": 45,
    "time": 18624,
    "velocity": 98
  },
  {
    "note": 57,
    "time": 18855,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 18855,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 18855,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 18855,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 18855,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 18909,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 18912,
    "velocity": 106
  },
  {
    "note": 67,
    "time": 18941,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 18944,
    "velocity": 104
  },
  {
    "note": 65,
    "time": 18973,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 18976,
    "velocity": 106
  },
  {
    "note": 64,
    "time": 19005,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 19008,
    "velocity": 102
  },
  {
    "note": 62,
    "time": 19037,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 19040,
    "velocity": 105
  },
  {
    "note": 61,
    "time": 19069,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 19072,
    "velocity": 102
  },
  {
    "note": 59,
    "time": 19101,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 19104,
    "velocity": 119
  },
  {
    "note": 61,
    "time": 19133,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 19136,
    "velocity": 117
  },
  {
    "note": 57,
    "time": 19165,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 19168,
    "velocity": 116
  },
  {
    "note": 59,
    "time": 19197,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 19200,
    "velocity": 116
  },
  {
    "note": 61,
    "time": 19229,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 19232,
    "velocity": 116
  },
  {
    "note": 62,
    "time": 19261,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 19264,
    "velocity": 117
  },
  {
    "note": 64,
    "time": 19293,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 19296,
    "velocity": 117
  },
  {
    "note": 65,
    "time": 19325,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 19328,
    "velocity": 119
  },
  {
    "note": 67,
    "time": 19357,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 19360,
    "velocity": 117
  },
  {
    "note": 69,
    "time": 19389,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 19392,
    "velocity": 124
  },
  {
    "note": 67,
    "time": 19421,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 19424,
    "velocity": 103
  },
  {
    "note": 65,
    "time": 19453,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 19456,
    "velocity": 104
  },
  {
    "note": 64,
    "time": 19485,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 19488,
    "velocity": 117
  },
  {
    "note": 65,
    "time": 19517,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 19520,
    "velocity": 116
  },
  {
    "note": 62,
    "time": 19549,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 19552,
    "velocity": 120
  },
  {
    "note": 65,
    "time": 19581,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 19584,
    "velocity": 124
  },
  {
    "note": 69,
    "time": 19613,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 19616,
    "velocity": 124
  },
  {
    "note": 73,
    "time": 19645,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 19648,
    "velocity": 120
  },
  {
    "note": 74,
    "time": 19706,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 19712,
    "velocity": 99
  },
  {
    "note": 45,
    "time": 19712,
    "velocity": 100
  },
  {
    "note": 69,
    "time": 19741,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 19741,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 19744,
    "velocity": 114
  },
  {
    "note": 47,
    "time": 19744,
    "velocity": 117
  },
  {
    "note": 71,
    "time": 19773,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 19773,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 19776,
    "velocity": 118
  },
  {
    "note": 49,
    "time": 19776,
    "velocity": 116
  },
  {
    "note": 73,
    "time": 19805,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 19805,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 19808,
    "velocity": 118
  },
  {
    "note": 50,
    "time": 19808,
    "velocity": 118
  },
  {
    "note": 74,
    "time": 19837,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 19837,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 19840,
    "velocity": 118
  },
  {
    "note": 52,
    "time": 19840,
    "velocity": 120
  },
  {
    "note": 76,
    "time": 19869,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 19869,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 19872,
    "velocity": 117
  },
  {
    "note": 53,
    "time": 19872,
    "velocity": 116
  },
  {
    "note": 77,
    "time": 19901,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 19901,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 19904,
    "velocity": 120
  },
  {
    "note": 55,
    "time": 19904,
    "velocity": 122
  },
  {
    "note": 79,
    "time": 19933,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 19933,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 19936,
    "velocity": 117
  },
  {
    "note": 57,
    "time": 19936,
    "velocity": 118
  },
  {
    "note": 81,
    "time": 19965,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 19965,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 19968,
    "velocity": 127
  },
  {
    "note": 58,
    "time": 19968,
    "velocity": 127
  },
  {
    "note": 82,
    "time": 20026,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 20026,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 20032,
    "velocity": 100
  },
  {
    "note": 38,
    "time": 20032,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 20032,
    "velocity": 100
  },
  {
    "note": 70,
    "time": 20096,
    "velocity": 97
  },
  {
    "note": 74,
    "time": 20096,
    "velocity": 98
  },
  {
    "note": 82,
    "time": 20096,
    "velocity": 98
  },
  {
    "note": 53,
    "time": 20096,
    "velocity": 100
  },
  {
    "note": 58,
    "time": 20096,
    "velocity": 99
  },
  {
    "note": 62,
    "time": 20096,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 20148,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 20148,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 20148,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 20154,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 20154,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 20154,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 20154,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 20154,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 20154,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 20160,
    "velocity": 104
  },
  {
    "note": 36,
    "time": 20160,
    "velocity": 104
  },
  {
    "note": 48,
    "time": 20160,
    "velocity": 106
  },
  {
    "note": 76,
    "time": 20224,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 20224,
    "velocity": 97
  },
  {
    "note": 52,
    "time": 20224,
    "velocity": 100
  },
  {
    "note": 57,
    "time": 20224,
    "velocity": 100
  },
  {
    "note": 72,
    "time": 20276,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 20276,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 20276,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 20282,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 20282,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 20282,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 20282,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 20288,
    "velocity": 104
  },
  {
    "note": 34,
    "time": 20288,
    "velocity": 102
  },
  {
    "note": 46,
    "time": 20288,
    "velocity": 102
  },
  {
    "note": 67,
    "time": 20352,
    "velocity": 97
  },
  {
    "note": 74,
    "time": 20352,
    "velocity": 98
  },
  {
    "note": 79,
    "time": 20352,
    "velocity": 98
  },
  {
    "note": 50,
    "time": 20352,
    "velocity": 98
  },
  {
    "note": 55,
    "time": 20352,
    "velocity": 100
  },
  {
    "note": 58,
    "time": 20352,
    "velocity": 98
  },
  {
    "note": 70,
    "time": 20404,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 20404,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 20404,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 20410,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 20410,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 20410,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 20410,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 20410,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 20410,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 20416,
    "velocity": 120
  },
  {
    "note": 73,
    "time": 20416,
    "velocity": 121
  },
  {
    "note": 76,
    "time": 20416,
    "velocity": 118
  },
  {
    "note": 81,
    "time": 20416,
    "velocity": 117
  },
  {
    "note": 33,
    "time": 20416,
    "velocity": 82
  },
  {
    "note": 45,
    "time": 20416,
    "velocity": 81
  },
  {
    "note": 69,
    "time": 20532,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 20532,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 20532,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 20532,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 20532,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 20532,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 20544,
    "velocity": 46
  },
  {
    "note": 74,
    "time": 20544,
    "velocity": 77
  },
  {
    "note": 82,
    "time": 20573,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 20576,
    "velocity": 70
  },
  {
    "note": 74,
    "time": 20576,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 20605,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 20608,
    "velocity": 72
  },
  {
    "note": 94,
    "time": 20608,
    "velocity": 73
  },
  {
    "note": 77,
    "time": 20608,
    "velocity": 71
  },
  {
    "note": 86,
    "time": 20637,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 20637,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 20640,
    "velocity": 57
  },
  {
    "note": 77,
    "time": 20640,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 20669,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 20672,
    "velocity": 53
  },
  {
    "note": 72,
    "time": 20672,
    "velocity": 61
  },
  {
    "note": 81,
    "time": 20701,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 20704,
    "velocity": 71
  },
  {
    "note": 72,
    "time": 20704,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 20733,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 20736,
    "velocity": 70
  },
  {
    "note": 93,
    "time": 20736,
    "velocity": 73
  },
  {
    "note": 76,
    "time": 20736,
    "velocity": 70
  },
  {
    "note": 84,
    "time": 20765,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 20765,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 20768,
    "velocity": 58
  },
  {
    "note": 76,
    "time": 20768,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 20797,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 20800,
    "velocity": 49
  },
  {
    "note": 70,
    "time": 20800,
    "velocity": 55
  },
  {
    "note": 79,
    "time": 20829,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 20832,
    "velocity": 71
  },
  {
    "note": 70,
    "time": 20832,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 20861,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 20864,
    "velocity": 72
  },
  {
    "note": 91,
    "time": 20864,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 20864,
    "velocity": 68
  },
  {
    "note": 82,
    "time": 20893,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 20893,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 20896,
    "velocity": 57
  },
  {
    "note": 74,
    "time": 20896,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 20925,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 20928,
    "velocity": 55
  },
  {
    "note": 69,
    "time": 20928,
    "velocity": 56
  },
  {
    "note": 81,
    "time": 20957,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 20960,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 20960,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 20989,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 20992,
    "velocity": 70
  },
  {
    "note": 73,
    "time": 20992,
    "velocity": 68
  },
  {
    "note": 88,
    "time": 21021,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 21024,
    "velocity": 73
  },
  {
    "note": 93,
    "time": 21024,
    "velocity": 71
  },
  {
    "note": 73,
    "time": 21024,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 21053,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 21053,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 21056,
    "velocity": 97
  },
  {
    "note": 38,
    "time": 21056,
    "velocity": 99
  },
  {
    "note": 50,
    "time": 21056,
    "velocity": 98
  },
  {
    "note": 70,
    "time": 21120,
    "velocity": 99
  },
  {
    "note": 74,
    "time": 21120,
    "velocity": 98
  },
  {
    "note": 82,
    "time": 21120,
    "velocity": 99
  },
  {
    "note": 53,
    "time": 21120,
    "velocity": 100
  },
  {
    "note": 58,
    "time": 21120,
    "velocity": 98
  },
  {
    "note": 62,
    "time": 21120,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 21172,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 21172,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 21172,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 21178,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 21178,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 21178,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 21178,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 21178,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 21178,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 21184,
    "velocity": 104
  },
  {
    "note": 36,
    "time": 21184,
    "velocity": 107
  },
  {
    "note": 48,
    "time": 21184,
    "velocity": 106
  },
  {
    "note": 76,
    "time": 21248,
    "velocity": 100
  },
  {
    "note": 81,
    "time": 21248,
    "velocity": 100
  },
  {
    "note": 52,
    "time": 21248,
    "velocity": 97
  },
  {
    "note": 57,
    "time": 21248,
    "velocity": 97
  },
  {
    "note": 72,
    "time": 21300,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 21300,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 21300,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 21306,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 21306,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 21306,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 21306,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 21312,
    "velocity": 102
  },
  {
    "note": 34,
    "time": 21312,
    "velocity": 102
  },
  {
    "note": 46,
    "time": 21312,
    "velocity": 105
  },
  {
    "note": 67,
    "time": 21376,
    "velocity": 98
  },
  {
    "note": 74,
    "time": 21376,
    "velocity": 99
  },
  {
    "note": 79,
    "time": 21376,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 21376,
    "velocity": 101
  },
  {
    "note": 55,
    "time": 21376,
    "velocity": 100
  },
  {
    "note": 58,
    "time": 21376,
    "velocity": 100
  },
  {
    "note": 70,
    "time": 21428,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 21428,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 21428,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 21434,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 21434,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 21434,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 21434,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 21434,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 21434,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 21440,
    "velocity": 119
  },
  {
    "note": 73,
    "time": 21440,
    "velocity": 118
  },
  {
    "note": 76,
    "time": 21440,
    "velocity": 117
  },
  {
    "note": 81,
    "time": 21440,
    "velocity": 119
  },
  {
    "note": 33,
    "time": 21440,
    "velocity": 80
  },
  {
    "note": 37,
    "time": 21440,
    "velocity": 81
  },
  {
    "note": 40,
    "time": 21440,
    "velocity": 82
  },
  {
    "note": 45,
    "time": 21440,
    "velocity": 81
  },
  {
    "note": 69,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 21556,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 21568,
    "velocity": 118
  },
  {
    "note": 74,
    "time": 21568,
    "velocity": 119
  },
  {
    "note": 77,
    "time": 21568,
    "velocity": 117
  },
  {
    "note": 83,
    "time": 21568,
    "velocity": 117
  },
  {
    "note": 32,
    "time": 21568,
    "velocity": 102
  },
  {
    "note": 35,
    "time": 21568,
    "velocity": 100
  },
  {
    "note": 38,
    "time": 21568,
    "velocity": 98
  },
  {
    "note": 44,
    "time": 21568,
    "velocity": 98
  },
  {
    "note": 71,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 32,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 35,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 44,
    "time": 21684,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 21696,
    "velocity": 123
  },
  {
    "note": 76,
    "time": 21696,
    "velocity": 119
  },
  {
    "note": 81,
    "time": 21696,
    "velocity": 122
  },
  {
    "note": 85,
    "time": 21696,
    "velocity": 121
  },
  {
    "note": 31,
    "time": 21696,
    "velocity": 115
  },
  {
    "note": 33,
    "time": 21696,
    "velocity": 115
  },
  {
    "note": 37,
    "time": 21696,
    "velocity": 118
  },
  {
    "note": 43,
    "time": 21696,
    "velocity": 117
  },
  {
    "note": 45,
    "time": 21696,
    "velocity": 117
  },
  {
    "note": 73,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 21869,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 21888,
    "velocity": 102
  },
  {
    "note": 83,
    "time": 21888,
    "velocity": 104
  },
  {
    "note": 59,
    "time": 21888,
    "velocity": 126
  },
  {
    "note": 71,
    "time": 21946,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 21946,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 21946,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 21952,
    "velocity": 105
  },
  {
    "note": 81,
    "time": 21952,
    "velocity": 104
  },
  {
    "note": 57,
    "time": 21952,
    "velocity": 112
  },
  {
    "note": 69,
    "time": 22010,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 22010,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 22010,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 22016,
    "velocity": 122
  },
  {
    "note": 85,
    "time": 22016,
    "velocity": 120
  },
  {
    "note": 61,
    "time": 22016,
    "velocity": 124
  },
  {
    "note": 73,
    "time": 22074,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 22074,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 22074,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 22080,
    "velocity": 122
  },
  {
    "note": 64,
    "time": 22080,
    "velocity": 122
  },
  {
    "note": 88,
    "time": 22109,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 22109,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 22112,
    "velocity": 122
  },
  {
    "note": 67,
    "time": 22112,
    "velocity": 123
  },
  {
    "note": 91,
    "time": 22141,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 22141,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 22144,
    "velocity": 123
  },
  {
    "note": 94,
    "time": 22144,
    "velocity": 121
  },
  {
    "note": 70,
    "time": 22144,
    "velocity": 120
  },
  {
    "note": 82,
    "time": 22202,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 22202,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 22202,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 22208,
    "velocity": 111
  },
  {
    "note": 93,
    "time": 22208,
    "velocity": 108
  },
  {
    "note": 69,
    "time": 22208,
    "velocity": 111
  },
  {
    "note": 81,
    "time": 22237,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 22237,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 22237,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 22240,
    "velocity": 99
  },
  {
    "note": 67,
    "time": 22240,
    "velocity": 100
  },
  {
    "note": 91,
    "time": 22269,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 22269,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 22272,
    "velocity": 94
  },
  {
    "note": 65,
    "time": 22272,
    "velocity": 95
  },
  {
    "note": 89,
    "time": 22301,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 22301,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 22304,
    "velocity": 89
  },
  {
    "note": 64,
    "time": 22304,
    "velocity": 89
  },
  {
    "note": 88,
    "time": 22333,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 22333,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 22336,
    "velocity": 93
  },
  {
    "note": 65,
    "time": 22336,
    "velocity": 95
  },
  {
    "note": 89,
    "time": 22365,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 22365,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 22368,
    "velocity": 83
  },
  {
    "note": 64,
    "time": 22368,
    "velocity": 80
  },
  {
    "note": 88,
    "time": 22397,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 22397,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 22400,
    "velocity": 76
  },
  {
    "note": 62,
    "time": 22400,
    "velocity": 74
  },
  {
    "note": 86,
    "time": 22429,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 22429,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 22432,
    "velocity": 69
  },
  {
    "note": 61,
    "time": 22432,
    "velocity": 71
  },
  {
    "note": 85,
    "time": 22461,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 22461,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 22464,
    "velocity": 78
  },
  {
    "note": 62,
    "time": 22464,
    "velocity": 78
  },
  {
    "note": 86,
    "time": 22493,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 22493,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 22496,
    "velocity": 61
  },
  {
    "note": 60,
    "time": 22496,
    "velocity": 61
  },
  {
    "note": 84,
    "time": 22525,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 22525,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 22528,
    "velocity": 55
  },
  {
    "note": 58,
    "time": 22528,
    "velocity": 56
  },
  {
    "note": 82,
    "time": 22557,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 22557,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 22560,
    "velocity": 52
  },
  {
    "note": 57,
    "time": 22560,
    "velocity": 51
  },
  {
    "note": 81,
    "time": 22589,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 22589,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 22592,
    "velocity": 47
  },
  {
    "note": 55,
    "time": 22592,
    "velocity": 47
  },
  {
    "note": 79,
    "time": 22621,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 22621,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 22624,
    "velocity": 41
  },
  {
    "note": 53,
    "time": 22624,
    "velocity": 41
  },
  {
    "note": 77,
    "time": 22653,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 22653,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 22656,
    "velocity": 39
  },
  {
    "note": 52,
    "time": 22656,
    "velocity": 39
  },
  {
    "note": 76,
    "time": 22685,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 22685,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 22688,
    "velocity": 32
  },
  {
    "note": 50,
    "time": 22688,
    "velocity": 43
  },
  {
    "note": 62,
    "time": 22688,
    "velocity": 42
  },
  {
    "note": 74,
    "time": 22717,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 22717,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 22717,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 22720,
    "velocity": 46
  },
  {
    "note": 79,
    "time": 22720,
    "velocity": 49
  },
  {
    "note": 82,
    "time": 22720,
    "velocity": 47
  },
  {
    "note": 85,
    "time": 22720,
    "velocity": 47
  },
  {
    "note": 88,
    "time": 22720,
    "velocity": 47
  },
  {
    "note": 43,
    "time": 22720,
    "velocity": 34
  },
  {
    "note": 46,
    "time": 22720,
    "velocity": 31
  },
  {
    "note": 49,
    "time": 22720,
    "velocity": 33
  },
  {
    "note": 52,
    "time": 22720,
    "velocity": 32
  },
  {
    "note": 55,
    "time": 22720,
    "velocity": 32
  },
  {
    "note": 76,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 23182,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23232,
    "velocity": 37
  },
  {
    "note": 85,
    "time": 23232,
    "velocity": 36
  },
  {
    "note": 76,
    "time": 23270,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23270,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 23274,
    "velocity": 38
  },
  {
    "note": 88,
    "time": 23274,
    "velocity": 36
  },
  {
    "note": 79,
    "time": 23313,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 23313,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23317,
    "velocity": 33
  },
  {
    "note": 85,
    "time": 23317,
    "velocity": 30
  },
  {
    "note": 76,
    "time": 23356,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23356,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 23360,
    "velocity": 32
  },
  {
    "note": 82,
    "time": 23360,
    "velocity": 31
  },
  {
    "note": 73,
    "time": 23398,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 23398,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23402,
    "velocity": 38
  },
  {
    "note": 85,
    "time": 23402,
    "velocity": 38
  },
  {
    "note": 76,
    "time": 23441,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23441,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 23445,
    "velocity": 32
  },
  {
    "note": 82,
    "time": 23445,
    "velocity": 34
  },
  {
    "note": 73,
    "time": 23484,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 23484,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23488,
    "velocity": 41
  },
  {
    "note": 85,
    "time": 23488,
    "velocity": 41
  },
  {
    "note": 76,
    "time": 23526,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23526,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 23530,
    "velocity": 40
  },
  {
    "note": 88,
    "time": 23530,
    "velocity": 37
  },
  {
    "note": 79,
    "time": 23569,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 23569,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23573,
    "velocity": 30
  },
  {
    "note": 85,
    "time": 23573,
    "velocity": 33
  },
  {
    "note": 76,
    "time": 23612,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23612,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 23616,
    "velocity": 30
  },
  {
    "note": 82,
    "time": 23616,
    "velocity": 31
  },
  {
    "note": 73,
    "time": 23654,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 23654,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23658,
    "velocity": 35
  },
  {
    "note": 85,
    "time": 23658,
    "velocity": 39
  },
  {
    "note": 76,
    "time": 23697,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23697,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 23701,
    "velocity": 32
  },
  {
    "note": 82,
    "time": 23701,
    "velocity": 31
  },
  {
    "note": 73,
    "time": 23740,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 23740,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23744,
    "velocity": 39
  },
  {
    "note": 85,
    "time": 23744,
    "velocity": 41
  },
  {
    "note": 76,
    "time": 23782,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23782,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 23786,
    "velocity": 38
  },
  {
    "note": 88,
    "time": 23786,
    "velocity": 40
  },
  {
    "note": 79,
    "time": 23825,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 23825,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23829,
    "velocity": 33
  },
  {
    "note": 85,
    "time": 23829,
    "velocity": 32
  },
  {
    "note": 76,
    "time": 23868,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23868,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 23872,
    "velocity": 30
  },
  {
    "note": 82,
    "time": 23872,
    "velocity": 30
  },
  {
    "note": 73,
    "time": 23910,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 23910,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 23914,
    "velocity": 35
  },
  {
    "note": 85,
    "time": 23914,
    "velocity": 37
  },
  {
    "note": 76,
    "time": 23953,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 23953,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 23957,
    "velocity": 30
  },
  {
    "note": 82,
    "time": 23957,
    "velocity": 33
  },
  {
    "note": 73,
    "time": 23996,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 23996,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24000,
    "velocity": 41
  },
  {
    "note": 85,
    "time": 24000,
    "velocity": 41
  },
  {
    "note": 76,
    "time": 24038,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 24038,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24042,
    "velocity": 40
  },
  {
    "note": 88,
    "time": 24042,
    "velocity": 40
  },
  {
    "note": 79,
    "time": 24081,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 24081,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24085,
    "velocity": 33
  },
  {
    "note": 85,
    "time": 24085,
    "velocity": 34
  },
  {
    "note": 76,
    "time": 24124,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 24124,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 24128,
    "velocity": 30
  },
  {
    "note": 82,
    "time": 24128,
    "velocity": 33
  },
  {
    "note": 73,
    "time": 24166,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 24166,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24170,
    "velocity": 35
  },
  {
    "note": 85,
    "time": 24170,
    "velocity": 36
  },
  {
    "note": 76,
    "time": 24209,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 24209,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 24213,
    "velocity": 34
  },
  {
    "note": 82,
    "time": 24213,
    "velocity": 31
  },
  {
    "note": 73,
    "time": 24252,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 24252,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24256,
    "velocity": 34
  },
  {
    "note": 79,
    "time": 24256,
    "velocity": 35
  },
  {
    "note": 70,
    "time": 24294,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24294,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 24298,
    "velocity": 36
  },
  {
    "note": 82,
    "time": 24298,
    "velocity": 39
  },
  {
    "note": 73,
    "time": 24337,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 24337,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24341,
    "velocity": 31
  },
  {
    "note": 79,
    "time": 24341,
    "velocity": 30
  },
  {
    "note": 70,
    "time": 24380,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24380,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 24384,
    "velocity": 31
  },
  {
    "note": 76,
    "time": 24384,
    "velocity": 31
  },
  {
    "note": 67,
    "time": 24422,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24422,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24426,
    "velocity": 39
  },
  {
    "note": 79,
    "time": 24426,
    "velocity": 38
  },
  {
    "note": 70,
    "time": 24465,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24465,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 24469,
    "velocity": 34
  },
  {
    "note": 76,
    "time": 24469,
    "velocity": 33
  },
  {
    "note": 67,
    "time": 24508,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24508,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24512,
    "velocity": 39
  },
  {
    "note": 79,
    "time": 24512,
    "velocity": 41
  },
  {
    "note": 70,
    "time": 24550,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24550,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 24554,
    "velocity": 40
  },
  {
    "note": 82,
    "time": 24554,
    "velocity": 37
  },
  {
    "note": 73,
    "time": 24593,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 24593,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24597,
    "velocity": 31
  },
  {
    "note": 79,
    "time": 24597,
    "velocity": 31
  },
  {
    "note": 70,
    "time": 24636,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24636,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 24640,
    "velocity": 31
  },
  {
    "note": 76,
    "time": 24640,
    "velocity": 31
  },
  {
    "note": 67,
    "time": 24678,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24678,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24682,
    "velocity": 37
  },
  {
    "note": 79,
    "time": 24682,
    "velocity": 36
  },
  {
    "note": 70,
    "time": 24721,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24721,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 24725,
    "velocity": 33
  },
  {
    "note": 76,
    "time": 24725,
    "velocity": 33
  },
  {
    "note": 67,
    "time": 24764,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24764,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24768,
    "velocity": 41
  },
  {
    "note": 79,
    "time": 24768,
    "velocity": 38
  },
  {
    "note": 70,
    "time": 24806,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24806,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 24810,
    "velocity": 38
  },
  {
    "note": 82,
    "time": 24810,
    "velocity": 39
  },
  {
    "note": 73,
    "time": 24849,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 24849,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24853,
    "velocity": 30
  },
  {
    "note": 79,
    "time": 24853,
    "velocity": 33
  },
  {
    "note": 70,
    "time": 24892,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24892,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 24896,
    "velocity": 30
  },
  {
    "note": 76,
    "time": 24896,
    "velocity": 33
  },
  {
    "note": 67,
    "time": 24934,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 24934,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 24938,
    "velocity": 38
  },
  {
    "note": 79,
    "time": 24938,
    "velocity": 35
  },
  {
    "note": 70,
    "time": 24977,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 24977,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 24981,
    "velocity": 31
  },
  {
    "note": 76,
    "time": 24981,
    "velocity": 32
  },
  {
    "note": 67,
    "time": 25020,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 25020,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25024,
    "velocity": 41
  },
  {
    "note": 79,
    "time": 25024,
    "velocity": 41
  },
  {
    "note": 70,
    "time": 25062,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 25062,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25066,
    "velocity": 40
  },
  {
    "note": 82,
    "time": 25066,
    "velocity": 39
  },
  {
    "note": 73,
    "time": 25105,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 25105,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25109,
    "velocity": 30
  },
  {
    "note": 79,
    "time": 25109,
    "velocity": 31
  },
  {
    "note": 70,
    "time": 25148,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 25148,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 25152,
    "velocity": 32
  },
  {
    "note": 76,
    "time": 25152,
    "velocity": 29
  },
  {
    "note": 67,
    "time": 25190,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 25190,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25194,
    "velocity": 39
  },
  {
    "note": 79,
    "time": 25194,
    "velocity": 35
  },
  {
    "note": 70,
    "time": 25233,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 25233,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 25237,
    "velocity": 31
  },
  {
    "note": 76,
    "time": 25237,
    "velocity": 31
  },
  {
    "note": 67,
    "time": 25276,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 25276,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25280,
    "velocity": 32
  },
  {
    "note": 73,
    "time": 25280,
    "velocity": 34
  },
  {
    "note": 64,
    "time": 25318,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25318,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 25322,
    "velocity": 39
  },
  {
    "note": 76,
    "time": 25322,
    "velocity": 40
  },
  {
    "note": 67,
    "time": 25361,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 25361,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25365,
    "velocity": 35
  },
  {
    "note": 73,
    "time": 25365,
    "velocity": 32
  },
  {
    "note": 64,
    "time": 25404,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25404,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 25408,
    "velocity": 33
  },
  {
    "note": 70,
    "time": 25408,
    "velocity": 35
  },
  {
    "note": 61,
    "time": 25446,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25446,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25450,
    "velocity": 40
  },
  {
    "note": 73,
    "time": 25450,
    "velocity": 40
  },
  {
    "note": 64,
    "time": 25489,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25489,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 25493,
    "velocity": 36
  },
  {
    "note": 70,
    "time": 25493,
    "velocity": 38
  },
  {
    "note": 61,
    "time": 25532,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25532,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25536,
    "velocity": 47
  },
  {
    "note": 73,
    "time": 25536,
    "velocity": 45
  },
  {
    "note": 64,
    "time": 25574,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25574,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 25578,
    "velocity": 45
  },
  {
    "note": 76,
    "time": 25578,
    "velocity": 44
  },
  {
    "note": 67,
    "time": 25617,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 25617,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25621,
    "velocity": 38
  },
  {
    "note": 73,
    "time": 25621,
    "velocity": 40
  },
  {
    "note": 64,
    "time": 25660,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25660,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 25664,
    "velocity": 39
  },
  {
    "note": 70,
    "time": 25664,
    "velocity": 37
  },
  {
    "note": 61,
    "time": 25702,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25702,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25706,
    "velocity": 45
  },
  {
    "note": 73,
    "time": 25706,
    "velocity": 46
  },
  {
    "note": 64,
    "time": 25745,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25745,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 25749,
    "velocity": 43
  },
  {
    "note": 70,
    "time": 25749,
    "velocity": 39
  },
  {
    "note": 61,
    "time": 25788,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25788,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25792,
    "velocity": 51
  },
  {
    "note": 73,
    "time": 25792,
    "velocity": 51
  },
  {
    "note": 64,
    "time": 25830,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25830,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 25834,
    "velocity": 50
  },
  {
    "note": 76,
    "time": 25834,
    "velocity": 53
  },
  {
    "note": 67,
    "time": 25873,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 25873,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25877,
    "velocity": 46
  },
  {
    "note": 73,
    "time": 25877,
    "velocity": 44
  },
  {
    "note": 64,
    "time": 25916,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 25916,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 25920,
    "velocity": 42
  },
  {
    "note": 70,
    "time": 25920,
    "velocity": 43
  },
  {
    "note": 61,
    "time": 25958,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 25958,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 25962,
    "velocity": 51
  },
  {
    "note": 73,
    "time": 25962,
    "velocity": 53
  },
  {
    "note": 64,
    "time": 26001,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26001,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 26005,
    "velocity": 47
  },
  {
    "note": 70,
    "time": 26005,
    "velocity": 45
  },
  {
    "note": 61,
    "time": 26044,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 26044,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26048,
    "velocity": 57
  },
  {
    "note": 73,
    "time": 26048,
    "velocity": 57
  },
  {
    "note": 64,
    "time": 26086,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26086,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26090,
    "velocity": 57
  },
  {
    "note": 76,
    "time": 26090,
    "velocity": 55
  },
  {
    "note": 67,
    "time": 26129,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26129,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26133,
    "velocity": 48
  },
  {
    "note": 73,
    "time": 26133,
    "velocity": 48
  },
  {
    "note": 64,
    "time": 26172,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26172,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 26176,
    "velocity": 48
  },
  {
    "note": 70,
    "time": 26176,
    "velocity": 50
  },
  {
    "note": 61,
    "time": 26214,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 26214,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26218,
    "velocity": 57
  },
  {
    "note": 73,
    "time": 26218,
    "velocity": 56
  },
  {
    "note": 64,
    "time": 26257,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26257,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 26261,
    "velocity": 51
  },
  {
    "note": 70,
    "time": 26261,
    "velocity": 52
  },
  {
    "note": 61,
    "time": 26300,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 26300,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26304,
    "velocity": 62
  },
  {
    "note": 73,
    "time": 26304,
    "velocity": 63
  },
  {
    "note": 64,
    "time": 26342,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26342,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26346,
    "velocity": 62
  },
  {
    "note": 76,
    "time": 26346,
    "velocity": 62
  },
  {
    "note": 67,
    "time": 26385,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26385,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26389,
    "velocity": 53
  },
  {
    "note": 73,
    "time": 26389,
    "velocity": 53
  },
  {
    "note": 64,
    "time": 26428,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26428,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26432,
    "velocity": 62
  },
  {
    "note": 76,
    "time": 26432,
    "velocity": 62
  },
  {
    "note": 67,
    "time": 26470,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26470,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 26474,
    "velocity": 65
  },
  {
    "note": 79,
    "time": 26474,
    "velocity": 66
  },
  {
    "note": 70,
    "time": 26513,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 26513,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26517,
    "velocity": 54
  },
  {
    "note": 76,
    "time": 26517,
    "velocity": 56
  },
  {
    "note": 67,
    "time": 26556,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26556,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26560,
    "velocity": 58
  },
  {
    "note": 73,
    "time": 26560,
    "velocity": 58
  },
  {
    "note": 64,
    "time": 26598,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26598,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26602,
    "velocity": 68
  },
  {
    "note": 76,
    "time": 26602,
    "velocity": 68
  },
  {
    "note": 67,
    "time": 26641,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26641,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26645,
    "velocity": 60
  },
  {
    "note": 73,
    "time": 26645,
    "velocity": 60
  },
  {
    "note": 64,
    "time": 26684,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26684,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26688,
    "velocity": 68
  },
  {
    "note": 76,
    "time": 26688,
    "velocity": 69
  },
  {
    "note": 67,
    "time": 26726,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26726,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 26730,
    "velocity": 72
  },
  {
    "note": 79,
    "time": 26730,
    "velocity": 69
  },
  {
    "note": 70,
    "time": 26769,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 26769,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26773,
    "velocity": 60
  },
  {
    "note": 76,
    "time": 26773,
    "velocity": 60
  },
  {
    "note": 67,
    "time": 26812,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26812,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26816,
    "velocity": 62
  },
  {
    "note": 73,
    "time": 26816,
    "velocity": 63
  },
  {
    "note": 64,
    "time": 26854,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26854,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26858,
    "velocity": 72
  },
  {
    "note": 76,
    "time": 26858,
    "velocity": 71
  },
  {
    "note": 67,
    "time": 26897,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26897,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 26901,
    "velocity": 64
  },
  {
    "note": 73,
    "time": 26901,
    "velocity": 63
  },
  {
    "note": 64,
    "time": 26940,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 26940,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 26944,
    "velocity": 74
  },
  {
    "note": 76,
    "time": 26944,
    "velocity": 75
  },
  {
    "note": 67,
    "time": 26982,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 26982,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 26986,
    "velocity": 77
  },
  {
    "note": 79,
    "time": 26986,
    "velocity": 78
  },
  {
    "note": 70,
    "time": 27025,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27025,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 27029,
    "velocity": 65
  },
  {
    "note": 76,
    "time": 27029,
    "velocity": 68
  },
  {
    "note": 67,
    "time": 27068,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 27068,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 27072,
    "velocity": 70
  },
  {
    "note": 73,
    "time": 27072,
    "velocity": 70
  },
  {
    "note": 64,
    "time": 27110,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 27110,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 27114,
    "velocity": 80
  },
  {
    "note": 76,
    "time": 27114,
    "velocity": 77
  },
  {
    "note": 67,
    "time": 27153,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 27153,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 27157,
    "velocity": 66
  },
  {
    "note": 73,
    "time": 27157,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 27196,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 27196,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 27200,
    "velocity": 80
  },
  {
    "note": 76,
    "time": 27200,
    "velocity": 80
  },
  {
    "note": 67,
    "time": 27238,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 27238,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 27242,
    "velocity": 84
  },
  {
    "note": 79,
    "time": 27242,
    "velocity": 85
  },
  {
    "note": 70,
    "time": 27281,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27281,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 27285,
    "velocity": 73
  },
  {
    "note": 76,
    "time": 27285,
    "velocity": 71
  },
  {
    "note": 67,
    "time": 27324,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 27324,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27328,
    "velocity": 87
  },
  {
    "note": 64,
    "time": 27328,
    "velocity": 35
  },
  {
    "note": 79,
    "time": 27366,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 27366,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 27370,
    "velocity": 85
  },
  {
    "note": 82,
    "time": 27370,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 27370,
    "velocity": 44
  },
  {
    "note": 70,
    "time": 27409,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 27409,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 27409,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27413,
    "velocity": 75
  },
  {
    "note": 64,
    "time": 27413,
    "velocity": 40
  },
  {
    "note": 79,
    "time": 27452,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 27452,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 27456,
    "velocity": 90
  },
  {
    "note": 82,
    "time": 27456,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 27456,
    "velocity": 53
  },
  {
    "note": 70,
    "time": 27494,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 27494,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 27494,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27498,
    "velocity": 79
  },
  {
    "note": 64,
    "time": 27498,
    "velocity": 48
  },
  {
    "note": 79,
    "time": 27537,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 27537,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 27541,
    "velocity": 95
  },
  {
    "note": 82,
    "time": 27541,
    "velocity": 94
  },
  {
    "note": 67,
    "time": 27541,
    "velocity": 62
  },
  {
    "note": 70,
    "time": 27580,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 27580,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 27580,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 27584,
    "velocity": 85
  },
  {
    "note": 79,
    "time": 27584,
    "velocity": 84
  },
  {
    "note": 58,
    "time": 27584,
    "velocity": 52
  },
  {
    "note": 73,
    "time": 27622,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27622,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 27622,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 27626,
    "velocity": 98
  },
  {
    "note": 82,
    "time": 27626,
    "velocity": 100
  },
  {
    "note": 61,
    "time": 27626,
    "velocity": 72
  },
  {
    "note": 70,
    "time": 27665,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 27665,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 27665,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 27669,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 27669,
    "velocity": 84
  },
  {
    "note": 58,
    "time": 27669,
    "velocity": 68
  },
  {
    "note": 73,
    "time": 27708,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27708,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 27708,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 27712,
    "velocity": 102
  },
  {
    "note": 82,
    "time": 27712,
    "velocity": 103
  },
  {
    "note": 61,
    "time": 27712,
    "velocity": 85
  },
  {
    "note": 70,
    "time": 27750,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 27750,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 27750,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 27754,
    "velocity": 88
  },
  {
    "note": 79,
    "time": 27754,
    "velocity": 90
  },
  {
    "note": 58,
    "time": 27754,
    "velocity": 75
  },
  {
    "note": 73,
    "time": 27793,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 27793,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 27793,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 27797,
    "velocity": 109
  },
  {
    "note": 82,
    "time": 27797,
    "velocity": 107
  },
  {
    "note": 61,
    "time": 27797,
    "velocity": 91
  },
  {
    "note": 70,
    "time": 27836,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 27836,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 27836,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 27840,
    "velocity": 116
  },
  {
    "note": 85,
    "time": 27840,
    "velocity": 116
  },
  {
    "note": 58,
    "time": 27840,
    "velocity": 89
  },
  {
    "note": 73,
    "time": 27878,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 27878,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 27878,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 27882,
    "velocity": 94
  },
  {
    "note": 52,
    "time": 27882,
    "velocity": 82
  },
  {
    "note": 81,
    "time": 27921,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 27921,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 27925,
    "velocity": 115
  },
  {
    "note": 85,
    "time": 27925,
    "velocity": 117
  },
  {
    "note": 58,
    "time": 27925,
    "velocity": 113
  },
  {
    "note": 73,
    "time": 27964,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 27964,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 27964,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 27968,
    "velocity": 120
  },
  {
    "note": 88,
    "time": 27968,
    "velocity": 121
  },
  {
    "note": 49,
    "time": 27968,
    "velocity": 116
  },
  {
    "note": 61,
    "time": 27968,
    "velocity": 119
  },
  {
    "note": 76,
    "time": 28006,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 28006,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 28006,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 28006,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 28010,
    "velocity": 104
  },
  {
    "note": 52,
    "time": 28010,
    "velocity": 89
  },
  {
    "note": 85,
    "time": 28049,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 28049,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 28053,
    "velocity": 122
  },
  {
    "note": 88,
    "time": 28053,
    "velocity": 120
  },
  {
    "note": 49,
    "time": 28053,
    "velocity": 127
  },
  {
    "note": 61,
    "time": 28053,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 28092,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 28092,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 28092,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 28092,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 28096,
    "velocity": 110
  },
  {
    "note": 52,
    "time": 28096,
    "velocity": 103
  },
  {
    "note": 85,
    "time": 28134,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 28134,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 28138,
    "velocity": 127
  },
  {
    "note": 88,
    "time": 28138,
    "velocity": 127
  },
  {
    "note": 49,
    "time": 28138,
    "velocity": 126
  },
  {
    "note": 61,
    "time": 28138,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 28177,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 28177,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 28177,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 28177,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 28181,
    "velocity": 112
  },
  {
    "note": 52,
    "time": 28181,
    "velocity": 104
  },
  {
    "note": 85,
    "time": 28220,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 28220,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 28224,
    "velocity": 127
  },
  {
    "note": 88,
    "time": 28224,
    "velocity": 127
  },
  {
    "note": 49,
    "time": 28224,
    "velocity": 127
  },
  {
    "note": 61,
    "time": 28224,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 28262,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 28262,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 28262,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 28262,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 28266,
    "velocity": 115
  },
  {
    "note": 52,
    "time": 28266,
    "velocity": 101
  },
  {
    "note": 85,
    "time": 28305,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 28305,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 28309,
    "velocity": 127
  },
  {
    "note": 88,
    "time": 28309,
    "velocity": 127
  },
  {
    "note": 49,
    "time": 28309,
    "velocity": 125
  },
  {
    "note": 61,
    "time": 28309,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 28348,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 28348,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 28348,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 28348,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 28352,
    "velocity": 127
  },
  {
    "note": 85,
    "time": 28352,
    "velocity": 127
  },
  {
    "note": 88,
    "time": 28352,
    "velocity": 126
  },
  {
    "note": 93,
    "time": 28352,
    "velocity": 126
  },
  {
    "note": 43,
    "time": 28352,
    "velocity": 112
  },
  {
    "note": 45,
    "time": 28352,
    "velocity": 112
  },
  {
    "note": 49,
    "time": 28352,
    "velocity": 110
  },
  {
    "note": 52,
    "time": 28352,
    "velocity": 110
  },
  {
    "note": 55,
    "time": 28352,
    "velocity": 111
  },
  {
    "note": 81,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 28583,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 28608,
    "velocity": 127
  },
  {
    "note": 86,
    "time": 28608,
    "velocity": 126
  },
  {
    "note": 89,
    "time": 28608,
    "velocity": 127
  },
  {
    "note": 93,
    "time": 28608,
    "velocity": 127
  },
  {
    "note": 41,
    "time": 28608,
    "velocity": 114
  },
  {
    "note": 45,
    "time": 28608,
    "velocity": 114
  },
  {
    "note": 50,
    "time": 28608,
    "velocity": 115
  },
  {
    "note": 53,
    "time": 28608,
    "velocity": 116
  },
  {
    "note": 81,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 28839,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 28864,
    "velocity": 123
  },
  {
    "note": 82,
    "time": 28864,
    "velocity": 120
  },
  {
    "note": 86,
    "time": 28864,
    "velocity": 122
  },
  {
    "note": 91,
    "time": 28864,
    "velocity": 122
  },
  {
    "note": 50,
    "time": 28864,
    "velocity": 119
  },
  {
    "note": 55,
    "time": 28864,
    "velocity": 117
  },
  {
    "note": 46,
    "time": 28864,
    "velocity": 103
  },
  {
    "note": 58,
    "time": 28864,
    "velocity": 100
  },
  {
    "note": 79,
    "time": 29095,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 29095,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 29095,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 29095,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 29095,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 29095,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 29210,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 29210,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 29248,
    "velocity": 103
  },
  {
    "note": 57,
    "time": 29248,
    "velocity": 104
  },
  {
    "note": 45,
    "time": 29306,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 29306,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 29312,
    "velocity": 103
  },
  {
    "note": 55,
    "time": 29312,
    "velocity": 102
  },
  {
    "note": 43,
    "time": 29370,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 29370,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 29376,
    "velocity": 112
  },
  {
    "note": 81,
    "time": 29376,
    "velocity": 112
  },
  {
    "note": 85,
    "time": 29376,
    "velocity": 113
  },
  {
    "note": 88,
    "time": 29376,
    "velocity": 114
  },
  {
    "note": 91,
    "time": 29376,
    "velocity": 115
  },
  {
    "note": 45,
    "time": 29376,
    "velocity": 121
  },
  {
    "note": 49,
    "time": 29376,
    "velocity": 118
  },
  {
    "note": 52,
    "time": 29376,
    "velocity": 122
  },
  {
    "note": 55,
    "time": 29376,
    "velocity": 118
  },
  {
    "note": 57,
    "time": 29376,
    "velocity": 120
  },
  {
    "note": 45,
    "time": 29549,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 29549,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 29549,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 29549,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 29549,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 29568,
    "velocity": 99
  },
  {
    "note": 52,
    "time": 29568,
    "velocity": 95
  },
  {
    "note": 79,
    "time": 29607,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 29607,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 29607,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 29607,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 29607,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 29626,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 29626,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 29632,
    "velocity": 114
  },
  {
    "note": 53,
    "time": 29632,
    "velocity": 114
  },
  {
    "note": 41,
    "time": 29690,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 29690,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 29696,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 29696,
    "velocity": 102
  },
  {
    "note": 38,
    "time": 29754,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 29754,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 29760,
    "velocity": 114
  },
  {
    "note": 52,
    "time": 29760,
    "velocity": 118
  },
  {
    "note": 40,
    "time": 29818,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 29818,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 29824,
    "velocity": 100
  },
  {
    "note": 49,
    "time": 29824,
    "velocity": 102
  },
  {
    "note": 37,
    "time": 29882,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 29882,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 29888,
    "velocity": 120
  },
  {
    "note": 50,
    "time": 29888,
    "velocity": 120
  },
  {
    "note": 38,
    "time": 29946,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 29946,
    "velocity": 0
  },
  {
    "note": 35,
    "time": 29952,
    "velocity": 100
  },
  {
    "note": 47,
    "time": 29952,
    "velocity": 102
  },
  {
    "note": 35,
    "time": 30010,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 30010,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 30016,
    "velocity": 115
  },
  {
    "note": 49,
    "time": 30016,
    "velocity": 116
  },
  {
    "note": 37,
    "time": 30074,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 30074,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 30080,
    "velocity": 101
  },
  {
    "note": 45,
    "time": 30080,
    "velocity": 98
  },
  {
    "note": 33,
    "time": 30138,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 30138,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 30144,
    "velocity": 115
  },
  {
    "note": 46,
    "time": 30144,
    "velocity": 119
  },
  {
    "note": 34,
    "time": 30202,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 30202,
    "velocity": 0
  },
  {
    "note": 32,
    "time": 30208,
    "velocity": 105
  },
  {
    "note": 44,
    "time": 30208,
    "velocity": 102
  },
  {
    "note": 32,
    "time": 30266,
    "velocity": 0
  },
  {
    "note": 44,
    "time": 30266,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 30272,
    "velocity": 115
  },
  {
    "note": 45,
    "time": 30272,
    "velocity": 117
  },
  {
    "note": 33,
    "time": 30330,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 30330,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 30336,
    "velocity": 97
  },
  {
    "note": 76,
    "time": 30336,
    "velocity": 97
  },
  {
    "note": 81,
    "time": 30336,
    "velocity": 100
  },
  {
    "note": 85,
    "time": 30336,
    "velocity": 100
  },
  {
    "note": 43,
    "time": 30336,
    "velocity": 126
  },
  {
    "note": 45,
    "time": 30336,
    "velocity": 126
  },
  {
    "note": 49,
    "time": 30336,
    "velocity": 126
  },
  {
    "note": 55,
    "time": 30336,
    "velocity": 127
  },
  {
    "note": 73,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 30394,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 30400,
    "velocity": 117
  },
  {
    "note": 77,
    "time": 30400,
    "velocity": 117
  },
  {
    "note": 81,
    "time": 30400,
    "velocity": 116
  },
  {
    "note": 86,
    "time": 30400,
    "velocity": 115
  },
  {
    "note": 41,
    "time": 30400,
    "velocity": 110
  },
  {
    "note": 45,
    "time": 30400,
    "velocity": 111
  },
  {
    "note": 50,
    "time": 30400,
    "velocity": 112
  },
  {
    "note": 53,
    "time": 30400,
    "velocity": 111
  },
  {
    "note": 74,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 30516,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 30528,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 30528,
    "velocity": 88
  },
  {
    "note": 74,
    "time": 30528,
    "velocity": 87
  },
  {
    "note": 77,
    "time": 30528,
    "velocity": 86
  },
  {
    "note": 38,
    "time": 30528,
    "velocity": 102
  },
  {
    "note": 41,
    "time": 30528,
    "velocity": 103
  },
  {
    "note": 45,
    "time": 30528,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 30528,
    "velocity": 102
  },
  {
    "note": 65,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 30644,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 30656,
    "velocity": 100
  },
  {
    "note": 64,
    "time": 30656,
    "velocity": 102
  },
  {
    "note": 74,
    "time": 30656,
    "velocity": 102
  },
  {
    "note": 69,
    "time": 30656,
    "velocity": 100
  },
  {
    "note": 62,
    "time": 30656,
    "velocity": 104
  },
  {
    "note": 33,
    "time": 30656,
    "velocity": 96
  },
  {
    "note": 45,
    "time": 30656,
    "velocity": 93
  },
  {
    "note": 64,
    "time": 30772,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 30772,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 30772,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 30784,
    "velocity": 105
  },
  {
    "note": 69,
    "time": 30784,
    "velocity": 106
  },
  {
    "note": 73,
    "time": 30784,
    "velocity": 103
  },
  {
    "note": 52,
    "time": 30784,
    "velocity": 105
  },
  {
    "note": 61,
    "time": 30784,
    "velocity": 106
  },
  {
    "note": 57,
    "time": 30784,
    "velocity": 98
  },
  {
    "note": 69,
    "time": 30829,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 30842,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 30848,
    "velocity": 100
  },
  {
    "note": 55,
    "time": 30848,
    "velocity": 103
  },
  {
    "note": 76,
    "time": 30887,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 30887,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 30887,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 30900,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 30900,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 30900,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 30900,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 30900,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 30906,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 30912,
    "velocity": 105
  },
  {
    "note": 74,
    "time": 30912,
    "velocity": 104
  },
  {
    "note": 67,
    "time": 30912,
    "velocity": 93
  },
  {
    "note": 62,
    "time": 30912,
    "velocity": 99
  },
  {
    "note": 26,
    "time": 30912,
    "velocity": 91
  },
  {
    "note": 38,
    "time": 30912,
    "velocity": 91
  },
  {
    "note": 67,
    "time": 31028,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 31028,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 31040,
    "velocity": 101
  },
  {
    "note": 53,
    "time": 31040,
    "velocity": 103
  },
  {
    "note": 65,
    "time": 31098,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 31098,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 31104,
    "velocity": 90
  },
  {
    "note": 52,
    "time": 31104,
    "velocity": 91
  },
  {
    "note": 62,
    "time": 31143,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 31162,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 31162,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 31168,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 31168,
    "velocity": 98
  },
  {
    "note": 65,
    "time": 31168,
    "velocity": 98
  },
  {
    "note": 38,
    "time": 31168,
    "velocity": 87
  },
  {
    "note": 45,
    "time": 31168,
    "velocity": 86
  },
  {
    "note": 50,
    "time": 31168,
    "velocity": 86
  },
  {
    "note": 53,
    "time": 31168,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 31374,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 31374,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 31374,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 31374,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 31399,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 31399,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 31399,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 31399,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 31399,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 31399,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 31399,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 31488,
    "velocity": 71
  },
  {
    "note": 69,
    "time": 31546,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 31552,
    "velocity": 75
  },
  {
    "note": 67,
    "time": 31610,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 31616,
    "velocity": 84
  },
  {
    "note": 69,
    "time": 31674,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 31680,
    "velocity": 73
  },
  {
    "note": 65,
    "time": 31738,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 31744,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 31802,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 31808,
    "velocity": 68
  },
  {
    "note": 64,
    "time": 31866,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 31872,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 31930,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 31936,
    "velocity": 69
  },
  {
    "note": 62,
    "time": 31994,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32000,
    "velocity": 90
  },
  {
    "note": 69,
    "time": 32058,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 32064,
    "velocity": 65
  },
  {
    "note": 61,
    "time": 32122,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32128,
    "velocity": 93
  },
  {
    "note": 69,
    "time": 32186,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 32192,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 32250,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32256,
    "velocity": 92
  },
  {
    "note": 69,
    "time": 32314,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 32320,
    "velocity": 71
  },
  {
    "note": 64,
    "time": 32378,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32384,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 32442,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 32448,
    "velocity": 74
  },
  {
    "note": 65,
    "time": 32506,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32512,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 32570,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 32576,
    "velocity": 61
  },
  {
    "note": 57,
    "time": 32634,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32640,
    "velocity": 96
  },
  {
    "note": 69,
    "time": 32698,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 32704,
    "velocity": 66
  },
  {
    "note": 59,
    "time": 32762,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32768,
    "velocity": 94
  },
  {
    "note": 69,
    "time": 32826,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 32832,
    "velocity": 68
  },
  {
    "note": 61,
    "time": 32890,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 32896,
    "velocity": 94
  },
  {
    "note": 69,
    "time": 32954,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 32960,
    "velocity": 69
  },
  {
    "note": 62,
    "time": 33018,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 33024,
    "velocity": 94
  },
  {
    "note": 69,
    "time": 33082,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 33088,
    "velocity": 65
  },
  {
    "note": 61,
    "time": 33146,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 33152,
    "velocity": 94
  },
  {
    "note": 69,
    "time": 33210,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 33216,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 33274,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 33280,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 33338,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 33344,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 33402,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 33408,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 33466,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 33472,
    "velocity": 75
  },
  {
    "note": 74,
    "time": 33536,
    "velocity": 69
  },
  {
    "note": 65,
    "time": 33588,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 33594,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 33600,
    "velocity": 71
  },
  {
    "note": 66,
    "time": 33600,
    "velocity": 81
  },
  {
    "note": 72,
    "time": 33658,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 33664,
    "velocity": 86
  },
  {
    "note": 66,
    "time": 33716,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 33722,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 33728,
    "velocity": 73
  },
  {
    "note": 67,
    "time": 33728,
    "velocity": 87
  },
  {
    "note": 70,
    "time": 33786,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 33792,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 33844,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 33850,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 33856,
    "velocity": 69
  },
  {
    "note": 60,
    "time": 33856,
    "velocity": 64
  },
  {
    "note": 69,
    "time": 33914,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 33920,
    "velocity": 91
  },
  {
    "note": 60,
    "time": 33972,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 33978,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 33984,
    "velocity": 70
  },
  {
    "note": 58,
    "time": 33984,
    "velocity": 76
  },
  {
    "note": 67,
    "time": 34042,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34048,
    "velocity": 91
  },
  {
    "note": 58,
    "time": 34100,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34106,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 34112,
    "velocity": 66
  },
  {
    "note": 57,
    "time": 34112,
    "velocity": 73
  },
  {
    "note": 66,
    "time": 34170,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34176,
    "velocity": 93
  },
  {
    "note": 57,
    "time": 34228,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34234,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 34240,
    "velocity": 69
  },
  {
    "note": 58,
    "time": 34240,
    "velocity": 85
  },
  {
    "note": 67,
    "time": 34298,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34304,
    "velocity": 94
  },
  {
    "note": 58,
    "time": 34356,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34362,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 34368,
    "velocity": 72
  },
  {
    "note": 60,
    "time": 34368,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 34426,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34432,
    "velocity": 89
  },
  {
    "note": 60,
    "time": 34484,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34490,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 34496,
    "velocity": 76
  },
  {
    "note": 62,
    "time": 34496,
    "velocity": 87
  },
  {
    "note": 70,
    "time": 34554,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34560,
    "velocity": 88
  },
  {
    "note": 62,
    "time": 34612,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34618,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 34624,
    "velocity": 59
  },
  {
    "note": 54,
    "time": 34624,
    "velocity": 65
  },
  {
    "note": 62,
    "time": 34682,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34688,
    "velocity": 97
  },
  {
    "note": 54,
    "time": 34740,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34746,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 34752,
    "velocity": 67
  },
  {
    "note": 55,
    "time": 34752,
    "velocity": 83
  },
  {
    "note": 64,
    "time": 34810,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34816,
    "velocity": 94
  },
  {
    "note": 55,
    "time": 34868,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34874,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 34880,
    "velocity": 67
  },
  {
    "note": 57,
    "time": 34880,
    "velocity": 85
  },
  {
    "note": 66,
    "time": 34938,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 34944,
    "velocity": 92
  },
  {
    "note": 57,
    "time": 34996,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35002,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 35008,
    "velocity": 72
  },
  {
    "note": 58,
    "time": 35008,
    "velocity": 85
  },
  {
    "note": 67,
    "time": 35066,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35072,
    "velocity": 92
  },
  {
    "note": 58,
    "time": 35124,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35130,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 35136,
    "velocity": 66
  },
  {
    "note": 57,
    "time": 35136,
    "velocity": 77
  },
  {
    "note": 66,
    "time": 35194,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35200,
    "velocity": 94
  },
  {
    "note": 57,
    "time": 35252,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35258,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 35264,
    "velocity": 71
  },
  {
    "note": 58,
    "time": 35264,
    "velocity": 85
  },
  {
    "note": 67,
    "time": 35322,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35328,
    "velocity": 93
  },
  {
    "note": 58,
    "time": 35380,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35386,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 35392,
    "velocity": 72
  },
  {
    "note": 54,
    "time": 35392,
    "velocity": 72
  },
  {
    "note": 69,
    "time": 35450,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35456,
    "velocity": 88
  },
  {
    "note": 54,
    "time": 35508,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35514,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 35520,
    "velocity": 76
  },
  {
    "note": 55,
    "time": 35520,
    "velocity": 84
  },
  {
    "note": 55,
    "time": 35578,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 35583,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 35584,
    "velocity": 103
  },
  {
    "note": 67,
    "time": 35642,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35648,
    "velocity": 86
  },
  {
    "note": 55,
    "time": 35648,
    "velocity": 62
  },
  {
    "note": 55,
    "time": 35706,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35711,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 35712,
    "velocity": 98
  },
  {
    "note": 67,
    "time": 35770,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 35776,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 35776,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 35834,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 35839,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 35840,
    "velocity": 89
  },
  {
    "note": 67,
    "time": 35898,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35904,
    "velocity": 88
  },
  {
    "note": 62,
    "time": 35904,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 35962,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 35967,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 35968,
    "velocity": 89
  },
  {
    "note": 67,
    "time": 36026,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 36032,
    "velocity": 88
  },
  {
    "note": 60,
    "time": 36032,
    "velocity": 68
  },
  {
    "note": 60,
    "time": 36090,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 36095,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 36096,
    "velocity": 86
  },
  {
    "note": 63,
    "time": 36154,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 36160,
    "velocity": 66
  },
  {
    "note": 60,
    "time": 36160,
    "velocity": 71
  },
  {
    "note": 60,
    "time": 36218,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 36223,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 36224,
    "velocity": 85
  },
  {
    "note": 63,
    "time": 36282,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 36288,
    "velocity": 95
  },
  {
    "note": 60,
    "time": 36288,
    "velocity": 76
  },
  {
    "note": 60,
    "time": 36346,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 36351,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 36352,
    "velocity": 85
  },
  {
    "note": 63,
    "time": 36410,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 36416,
    "velocity": 66
  },
  {
    "note": 60,
    "time": 36416,
    "velocity": 73
  },
  {
    "note": 60,
    "time": 36474,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 36479,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 36480,
    "velocity": 86
  },
  {
    "note": 63,
    "time": 36538,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 36544,
    "velocity": 92
  },
  {
    "note": 60,
    "time": 36544,
    "velocity": 76
  },
  {
    "note": 60,
    "time": 36602,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 36607,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 36608,
    "velocity": 91
  },
  {
    "note": 65,
    "time": 36666,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 36672,
    "velocity": 75
  },
  {
    "note": 60,
    "time": 36672,
    "velocity": 72
  },
  {
    "note": 60,
    "time": 36730,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 36735,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 36736,
    "velocity": 91
  },
  {
    "note": 65,
    "time": 36794,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 36800,
    "velocity": 89
  },
  {
    "note": 60,
    "time": 36800,
    "velocity": 74
  },
  {
    "note": 60,
    "time": 36858,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 36863,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 36864,
    "velocity": 89
  },
  {
    "note": 65,
    "time": 36922,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 36928,
    "velocity": 72
  },
  {
    "note": 60,
    "time": 36928,
    "velocity": 70
  },
  {
    "note": 60,
    "time": 36986,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 36991,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 36992,
    "velocity": 90
  },
  {
    "note": 65,
    "time": 37050,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 37056,
    "velocity": 91
  },
  {
    "note": 58,
    "time": 37056,
    "velocity": 70
  },
  {
    "note": 58,
    "time": 37114,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 37119,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 37120,
    "velocity": 85
  },
  {
    "note": 62,
    "time": 37178,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 37184,
    "velocity": 65
  },
  {
    "note": 58,
    "time": 37184,
    "velocity": 71
  },
  {
    "note": 58,
    "time": 37242,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 37247,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 37248,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 37306,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 37312,
    "velocity": 97
  },
  {
    "note": 58,
    "time": 37312,
    "velocity": 77
  },
  {
    "note": 58,
    "time": 37370,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 37375,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 37376,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 37434,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 37440,
    "velocity": 64
  },
  {
    "note": 58,
    "time": 37440,
    "velocity": 74
  },
  {
    "note": 58,
    "time": 37498,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 37503,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 37504,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 37562,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 37568,
    "velocity": 91
  },
  {
    "note": 58,
    "time": 37568,
    "velocity": 75
  },
  {
    "note": 58,
    "time": 37626,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 37631,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 37632,
    "velocity": 90
  },
  {
    "note": 64,
    "time": 37690,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 37696,
    "velocity": 72
  },
  {
    "note": 58,
    "time": 37696,
    "velocity": 68
  },
  {
    "note": 58,
    "time": 37754,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 37759,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 37760,
    "velocity": 90
  },
  {
    "note": 64,
    "time": 37818,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 37824,
    "velocity": 89
  },
  {
    "note": 58,
    "time": 37824,
    "velocity": 71
  },
  {
    "note": 58,
    "time": 37882,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 37887,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 37888,
    "velocity": 90
  },
  {
    "note": 64,
    "time": 37946,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 37952,
    "velocity": 73
  },
  {
    "note": 58,
    "time": 37952,
    "velocity": 70
  },
  {
    "note": 58,
    "time": 38010,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 38015,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 38016,
    "velocity": 90
  },
  {
    "note": 64,
    "time": 38074,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 38080,
    "velocity": 93
  },
  {
    "note": 57,
    "time": 38080,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 38138,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38144,
    "velocity": 85
  },
  {
    "note": 73,
    "time": 38196,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38202,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 38208,
    "velocity": 65
  },
  {
    "note": 57,
    "time": 38208,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 38266,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38272,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 38324,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38330,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 38336,
    "velocity": 100
  },
  {
    "note": 57,
    "time": 38336,
    "velocity": 76
  },
  {
    "note": 57,
    "time": 38394,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38400,
    "velocity": 85
  },
  {
    "note": 73,
    "time": 38452,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38458,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 38464,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 38464,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 38522,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38528,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 38580,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 38586,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 38592,
    "velocity": 91
  },
  {
    "note": 53,
    "time": 38592,
    "velocity": 67
  },
  {
    "note": 53,
    "time": 38650,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 38656,
    "velocity": 96
  },
  {
    "note": 69,
    "time": 38708,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 38714,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 38720,
    "velocity": 72
  },
  {
    "note": 53,
    "time": 38720,
    "velocity": 66
  },
  {
    "note": 53,
    "time": 38778,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 38784,
    "velocity": 94
  },
  {
    "note": 65,
    "time": 38836,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 38842,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 38848,
    "velocity": 90
  },
  {
    "note": 53,
    "time": 38848,
    "velocity": 68
  },
  {
    "note": 53,
    "time": 38906,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 38912,
    "velocity": 97
  },
  {
    "note": 69,
    "time": 38964,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 38970,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 38976,
    "velocity": 71
  },
  {
    "note": 53,
    "time": 38976,
    "velocity": 66
  },
  {
    "note": 53,
    "time": 39034,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 39040,
    "velocity": 95
  },
  {
    "note": 65,
    "time": 39092,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 39098,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 39104,
    "velocity": 85
  },
  {
    "note": 52,
    "time": 39104,
    "velocity": 68
  },
  {
    "note": 52,
    "time": 39162,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39168,
    "velocity": 88
  },
  {
    "note": 67,
    "time": 39220,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39226,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 39232,
    "velocity": 66
  },
  {
    "note": 52,
    "time": 39232,
    "velocity": 70
  },
  {
    "note": 52,
    "time": 39290,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39296,
    "velocity": 89
  },
  {
    "note": 61,
    "time": 39348,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39354,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 39360,
    "velocity": 94
  },
  {
    "note": 52,
    "time": 39360,
    "velocity": 71
  },
  {
    "note": 52,
    "time": 39418,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39424,
    "velocity": 90
  },
  {
    "note": 67,
    "time": 39476,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39482,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 39488,
    "velocity": 69
  },
  {
    "note": 52,
    "time": 39488,
    "velocity": 69
  },
  {
    "note": 52,
    "time": 39546,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39552,
    "velocity": 89
  },
  {
    "note": 61,
    "time": 39604,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 39610,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 39616,
    "velocity": 89
  },
  {
    "note": 50,
    "time": 39616,
    "velocity": 70
  },
  {
    "note": 50,
    "time": 39674,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 39680,
    "velocity": 91
  },
  {
    "note": 65,
    "time": 39732,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 39738,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 39744,
    "velocity": 74
  },
  {
    "note": 50,
    "time": 39744,
    "velocity": 67
  },
  {
    "note": 50,
    "time": 39802,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 39808,
    "velocity": 92
  },
  {
    "note": 62,
    "time": 39860,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 39866,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 39872,
    "velocity": 89
  },
  {
    "note": 50,
    "time": 39872,
    "velocity": 70
  },
  {
    "note": 50,
    "time": 39930,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 39936,
    "velocity": 91
  },
  {
    "note": 65,
    "time": 39988,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 39994,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 40000,
    "velocity": 74
  },
  {
    "note": 50,
    "time": 40000,
    "velocity": 66
  },
  {
    "note": 50,
    "time": 40058,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 40064,
    "velocity": 91
  },
  {
    "note": 62,
    "time": 40116,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 40122,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 40128,
    "velocity": 86
  },
  {
    "note": 52,
    "time": 40128,
    "velocity": 73
  },
  {
    "note": 52,
    "time": 40186,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40192,
    "velocity": 85
  },
  {
    "note": 64,
    "time": 40244,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40250,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 40256,
    "velocity": 67
  },
  {
    "note": 52,
    "time": 40256,
    "velocity": 72
  },
  {
    "note": 52,
    "time": 40314,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40320,
    "velocity": 87
  },
  {
    "note": 58,
    "time": 40372,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40378,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 40384,
    "velocity": 92
  },
  {
    "note": 52,
    "time": 40384,
    "velocity": 75
  },
  {
    "note": 52,
    "time": 40442,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40448,
    "velocity": 85
  },
  {
    "note": 64,
    "time": 40500,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40506,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 40512,
    "velocity": 68
  },
  {
    "note": 52,
    "time": 40512,
    "velocity": 74
  },
  {
    "note": 52,
    "time": 40570,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40576,
    "velocity": 85
  },
  {
    "note": 58,
    "time": 40628,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 40634,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 40640,
    "velocity": 88
  },
  {
    "note": 53,
    "time": 40640,
    "velocity": 75
  },
  {
    "note": 81,
    "time": 40704,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 40756,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 40756,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 40762,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 40768,
    "velocity": 74
  },
  {
    "note": 57,
    "time": 40768,
    "velocity": 80
  },
  {
    "note": 52,
    "time": 40768,
    "velocity": 77
  },
  {
    "note": 79,
    "time": 40826,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 40832,
    "velocity": 85
  },
  {
    "note": 57,
    "time": 40884,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 40884,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 40890,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 40896,
    "velocity": 76
  },
  {
    "note": 57,
    "time": 40896,
    "velocity": 81
  },
  {
    "note": 50,
    "time": 40896,
    "velocity": 78
  },
  {
    "note": 77,
    "time": 40954,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 40960,
    "velocity": 88
  },
  {
    "note": 57,
    "time": 41012,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 41012,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41018,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 41024,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 41024,
    "velocity": 80
  },
  {
    "note": 55,
    "time": 41024,
    "velocity": 90
  },
  {
    "note": 76,
    "time": 41082,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41088,
    "velocity": 90
  },
  {
    "note": 57,
    "time": 41140,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 41140,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41146,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 41152,
    "velocity": 67
  },
  {
    "note": 57,
    "time": 41152,
    "velocity": 84
  },
  {
    "note": 53,
    "time": 41152,
    "velocity": 79
  },
  {
    "note": 74,
    "time": 41210,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41216,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 41268,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 41268,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41274,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 41280,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 41280,
    "velocity": 82
  },
  {
    "note": 52,
    "time": 41280,
    "velocity": 77
  },
  {
    "note": 73,
    "time": 41338,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41344,
    "velocity": 92
  },
  {
    "note": 57,
    "time": 41396,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 41396,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41402,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 41408,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 41408,
    "velocity": 82
  },
  {
    "note": 53,
    "time": 41408,
    "velocity": 86
  },
  {
    "note": 74,
    "time": 41466,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41472,
    "velocity": 92
  },
  {
    "note": 57,
    "time": 41524,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 41524,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41530,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 41536,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 41536,
    "velocity": 78
  },
  {
    "note": 49,
    "time": 41536,
    "velocity": 70
  },
  {
    "note": 76,
    "time": 41594,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41600,
    "velocity": 90
  },
  {
    "note": 57,
    "time": 41652,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 41652,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41658,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 41664,
    "velocity": 77
  },
  {
    "note": 57,
    "time": 41664,
    "velocity": 84
  },
  {
    "note": 50,
    "time": 41664,
    "velocity": 85
  },
  {
    "note": 77,
    "time": 41722,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41728,
    "velocity": 85
  },
  {
    "note": 57,
    "time": 41780,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 41780,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41786,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 41792,
    "velocity": 58
  },
  {
    "note": 57,
    "time": 41792,
    "velocity": 81
  },
  {
    "note": 49,
    "time": 41792,
    "velocity": 76
  },
  {
    "note": 69,
    "time": 41850,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41856,
    "velocity": 97
  },
  {
    "note": 57,
    "time": 41908,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 41908,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41914,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 41920,
    "velocity": 66
  },
  {
    "note": 57,
    "time": 41920,
    "velocity": 83
  },
  {
    "note": 50,
    "time": 41920,
    "velocity": 84
  },
  {
    "note": 71,
    "time": 41978,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 41984,
    "velocity": 96
  },
  {
    "note": 57,
    "time": 42036,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 42036,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42042,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 42048,
    "velocity": 65
  },
  {
    "note": 57,
    "time": 42048,
    "velocity": 78
  },
  {
    "note": 52,
    "time": 42048,
    "velocity": 85
  },
  {
    "note": 73,
    "time": 42106,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42112,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 42164,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 42164,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42170,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 42176,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 42176,
    "velocity": 85
  },
  {
    "note": 53,
    "time": 42176,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 42234,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42240,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 42292,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 42292,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42298,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 42304,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 42304,
    "velocity": 80
  },
  {
    "note": 52,
    "time": 42304,
    "velocity": 74
  },
  {
    "note": 73,
    "time": 42362,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42368,
    "velocity": 92
  },
  {
    "note": 57,
    "time": 42420,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 42420,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42426,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 42432,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 42432,
    "velocity": 84
  },
  {
    "note": 53,
    "time": 42432,
    "velocity": 87
  },
  {
    "note": 74,
    "time": 42490,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42496,
    "velocity": 94
  },
  {
    "note": 57,
    "time": 42548,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 42548,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42554,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 42560,
    "velocity": 73
  },
  {
    "note": 57,
    "time": 42560,
    "velocity": 81
  },
  {
    "note": 49,
    "time": 42560,
    "velocity": 69
  },
  {
    "note": 76,
    "time": 42618,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42624,
    "velocity": 90
  },
  {
    "note": 57,
    "time": 42676,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 42676,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42682,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 42688,
    "velocity": 77
  },
  {
    "note": 57,
    "time": 42688,
    "velocity": 78
  },
  {
    "note": 50,
    "time": 42688,
    "velocity": 83
  },
  {
    "note": 77,
    "time": 42746,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42752,
    "velocity": 85
  },
  {
    "note": 50,
    "time": 42804,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42810,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 42816,
    "velocity": 69
  },
  {
    "note": 53,
    "time": 42816,
    "velocity": 88
  },
  {
    "note": 76,
    "time": 42874,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 42879,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42880,
    "velocity": 90
  },
  {
    "note": 57,
    "time": 42919,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 42938,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 42944,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 42944,
    "velocity": 90
  },
  {
    "note": 53,
    "time": 42944,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 43002,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43008,
    "velocity": 91
  },
  {
    "note": 53,
    "time": 43060,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43066,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 43072,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 43072,
    "velocity": 87
  },
  {
    "note": 72,
    "time": 43130,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 43135,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43136,
    "velocity": 96
  },
  {
    "note": 62,
    "time": 43175,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43194,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 43200,
    "velocity": 64
  },
  {
    "note": 62,
    "time": 43200,
    "velocity": 82
  },
  {
    "note": 55,
    "time": 43200,
    "velocity": 81
  },
  {
    "note": 70,
    "time": 43258,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43264,
    "velocity": 96
  },
  {
    "note": 62,
    "time": 43316,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43322,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 43328,
    "velocity": 66
  },
  {
    "note": 65,
    "time": 43328,
    "velocity": 84
  },
  {
    "note": 72,
    "time": 43386,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 43391,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43392,
    "velocity": 95
  },
  {
    "note": 55,
    "time": 43431,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 43450,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 43456,
    "velocity": 70
  },
  {
    "note": 65,
    "time": 43456,
    "velocity": 83
  },
  {
    "note": 74,
    "time": 43514,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43520,
    "velocity": 87
  },
  {
    "note": 65,
    "time": 43572,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43578,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 43584,
    "velocity": 65
  },
  {
    "note": 70,
    "time": 43584,
    "velocity": 91
  },
  {
    "note": 70,
    "time": 43642,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43648,
    "velocity": 97
  },
  {
    "note": 70,
    "time": 43700,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43706,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 43712,
    "velocity": 77
  },
  {
    "note": 60,
    "time": 43712,
    "velocity": 65
  },
  {
    "note": 48,
    "time": 43712,
    "velocity": 74
  },
  {
    "note": 76,
    "time": 43770,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43776,
    "velocity": 87
  },
  {
    "note": 48,
    "time": 43828,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43834,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 43840,
    "velocity": 70
  },
  {
    "note": 52,
    "time": 43840,
    "velocity": 88
  },
  {
    "note": 74,
    "time": 43898,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 43903,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43904,
    "velocity": 88
  },
  {
    "note": 60,
    "time": 43943,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 43962,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 43968,
    "velocity": 71
  },
  {
    "note": 60,
    "time": 43968,
    "velocity": 77
  },
  {
    "note": 52,
    "time": 43968,
    "velocity": 84
  },
  {
    "note": 72,
    "time": 44026,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44032,
    "velocity": 93
  },
  {
    "note": 52,
    "time": 44084,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44090,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 44096,
    "velocity": 65
  },
  {
    "note": 55,
    "time": 44096,
    "velocity": 85
  },
  {
    "note": 70,
    "time": 44154,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 44159,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44160,
    "velocity": 94
  },
  {
    "note": 60,
    "time": 44199,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44218,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 44224,
    "velocity": 67
  },
  {
    "note": 60,
    "time": 44224,
    "velocity": 83
  },
  {
    "note": 53,
    "time": 44224,
    "velocity": 78
  },
  {
    "note": 69,
    "time": 44282,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44288,
    "velocity": 95
  },
  {
    "note": 60,
    "time": 44340,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44346,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 44352,
    "velocity": 65
  },
  {
    "note": 64,
    "time": 44352,
    "velocity": 90
  },
  {
    "note": 70,
    "time": 44410,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 44415,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44416,
    "velocity": 93
  },
  {
    "note": 53,
    "time": 44455,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 44474,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 44480,
    "velocity": 71
  },
  {
    "note": 64,
    "time": 44480,
    "velocity": 84
  },
  {
    "note": 72,
    "time": 44538,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44544,
    "velocity": 88
  },
  {
    "note": 64,
    "time": 44596,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44602,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 44608,
    "velocity": 63
  },
  {
    "note": 69,
    "time": 44608,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 44666,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44672,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 44724,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44730,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 44736,
    "velocity": 76
  },
  {
    "note": 58,
    "time": 44736,
    "velocity": 62
  },
  {
    "note": 46,
    "time": 44736,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 44794,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44800,
    "velocity": 87
  },
  {
    "note": 46,
    "time": 44852,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44858,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 44864,
    "velocity": 69
  },
  {
    "note": 50,
    "time": 44864,
    "velocity": 88
  },
  {
    "note": 72,
    "time": 44922,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 44927,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44928,
    "velocity": 87
  },
  {
    "note": 58,
    "time": 44967,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 44986,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 44992,
    "velocity": 68
  },
  {
    "note": 58,
    "time": 44992,
    "velocity": 75
  },
  {
    "note": 50,
    "time": 44992,
    "velocity": 85
  },
  {
    "note": 70,
    "time": 45050,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45056,
    "velocity": 92
  },
  {
    "note": 50,
    "time": 45108,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45114,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 45120,
    "velocity": 67
  },
  {
    "note": 53,
    "time": 45120,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 45178,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 45183,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45184,
    "velocity": 94
  },
  {
    "note": 58,
    "time": 45223,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45242,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 45248,
    "velocity": 67
  },
  {
    "note": 58,
    "time": 45248,
    "velocity": 83
  },
  {
    "note": 52,
    "time": 45248,
    "velocity": 81
  },
  {
    "note": 67,
    "time": 45306,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45312,
    "velocity": 95
  },
  {
    "note": 58,
    "time": 45364,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45370,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 45376,
    "velocity": 66
  },
  {
    "note": 62,
    "time": 45376,
    "velocity": 88
  },
  {
    "note": 69,
    "time": 45434,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 45439,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45440,
    "velocity": 93
  },
  {
    "note": 52,
    "time": 45479,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 45498,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 45504,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 45504,
    "velocity": 82
  },
  {
    "note": 70,
    "time": 45562,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 45568,
    "velocity": 89
  },
  {
    "note": 62,
    "time": 45620,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 45626,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 45632,
    "velocity": 64
  },
  {
    "note": 67,
    "time": 45632,
    "velocity": 89
  },
  {
    "note": 67,
    "time": 45690,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 45696,
    "velocity": 94
  },
  {
    "note": 67,
    "time": 45748,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 45754,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 45760,
    "velocity": 78
  },
  {
    "note": 57,
    "time": 45760,
    "velocity": 65
  },
  {
    "note": 45,
    "time": 45760,
    "velocity": 76
  },
  {
    "note": 73,
    "time": 45818,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 45824,
    "velocity": 84
  },
  {
    "note": 45,
    "time": 45876,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 45882,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 45888,
    "velocity": 66
  },
  {
    "note": 49,
    "time": 45888,
    "velocity": 87
  },
  {
    "note": 70,
    "time": 45946,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 45951,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 45952,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 45991,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46010,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 46016,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 46016,
    "velocity": 76
  },
  {
    "note": 49,
    "time": 46016,
    "velocity": 84
  },
  {
    "note": 69,
    "time": 46074,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46080,
    "velocity": 93
  },
  {
    "note": 49,
    "time": 46132,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46138,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 46144,
    "velocity": 65
  },
  {
    "note": 52,
    "time": 46144,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 46202,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 46207,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46208,
    "velocity": 95
  },
  {
    "note": 57,
    "time": 46247,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46266,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 46272,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 46272,
    "velocity": 82
  },
  {
    "note": 50,
    "time": 46272,
    "velocity": 79
  },
  {
    "note": 65,
    "time": 46330,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46336,
    "velocity": 96
  },
  {
    "note": 76,
    "time": 46394,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 46400,
    "velocity": 67
  },
  {
    "note": 67,
    "time": 46458,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46464,
    "velocity": 96
  },
  {
    "note": 57,
    "time": 46503,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 46503,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46522,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 46528,
    "velocity": 71
  },
  {
    "note": 69,
    "time": 46586,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 46592,
    "velocity": 87
  },
  {
    "note": 74,
    "time": 46650,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 46656,
    "velocity": 62
  },
  {
    "note": 62,
    "time": 46656,
    "velocity": 72
  },
  {
    "note": 53,
    "time": 46656,
    "velocity": 72
  },
  {
    "note": 65,
    "time": 46714,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 46720,
    "velocity": 95
  },
  {
    "note": 62,
    "time": 46772,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 46772,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 46778,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 46784,
    "velocity": 66
  },
  {
    "note": 61,
    "time": 46784,
    "velocity": 78
  },
  {
    "note": 58,
    "time": 46784,
    "velocity": 92
  },
  {
    "note": 64,
    "time": 46842,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46848,
    "velocity": 100
  },
  {
    "note": 61,
    "time": 46900,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 46900,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46906,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 46912,
    "velocity": 62
  },
  {
    "note": 61,
    "time": 46912,
    "velocity": 80
  },
  {
    "note": 58,
    "time": 46912,
    "velocity": 82
  },
  {
    "note": 64,
    "time": 46970,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 46976,
    "velocity": 100
  },
  {
    "note": 61,
    "time": 47028,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 47028,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 47034,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 47040,
    "velocity": 66
  },
  {
    "note": 62,
    "time": 47040,
    "velocity": 86
  },
  {
    "note": 57,
    "time": 47040,
    "velocity": 79
  },
  {
    "note": 65,
    "time": 47098,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 47104,
    "velocity": 93
  },
  {
    "note": 62,
    "time": 47156,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 47156,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 47162,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 47168,
    "velocity": 65
  },
  {
    "note": 62,
    "time": 47168,
    "velocity": 82
  },
  {
    "note": 57,
    "time": 47168,
    "velocity": 78
  },
  {
    "note": 65,
    "time": 47226,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 47232,
    "velocity": 95
  },
  {
    "note": 62,
    "time": 47284,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 47284,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 47290,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 47296,
    "velocity": 75
  },
  {
    "note": 64,
    "time": 47296,
    "velocity": 87
  },
  {
    "note": 55,
    "time": 47296,
    "velocity": 79
  },
  {
    "note": 70,
    "time": 47354,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 47360,
    "velocity": 86
  },
  {
    "note": 73,
    "time": 47418,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 47424,
    "velocity": 73
  },
  {
    "note": 70,
    "time": 47482,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 47488,
    "velocity": 88
  },
  {
    "note": 64,
    "time": 47527,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 47527,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 47546,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 47552,
    "velocity": 76
  },
  {
    "note": 69,
    "time": 47610,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 47616,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 47674,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 47680,
    "velocity": 62
  },
  {
    "note": 62,
    "time": 47680,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 47680,
    "velocity": 72
  },
  {
    "note": 65,
    "time": 47738,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 47744,
    "velocity": 95
  },
  {
    "note": 62,
    "time": 47796,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 47796,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 47802,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 47808,
    "velocity": 64
  },
  {
    "note": 61,
    "time": 47808,
    "velocity": 79
  },
  {
    "note": 58,
    "time": 47808,
    "velocity": 85
  },
  {
    "note": 64,
    "time": 47866,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 47872,
    "velocity": 98
  },
  {
    "note": 61,
    "time": 47924,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 47924,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 47930,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 47936,
    "velocity": 62
  },
  {
    "note": 61,
    "time": 47936,
    "velocity": 80
  },
  {
    "note": 58,
    "time": 47936,
    "velocity": 80
  },
  {
    "note": 64,
    "time": 47994,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 48000,
    "velocity": 100
  },
  {
    "note": 61,
    "time": 48052,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 48052,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 48058,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 48064,
    "velocity": 66
  },
  {
    "note": 62,
    "time": 48064,
    "velocity": 87
  },
  {
    "note": 57,
    "time": 48064,
    "velocity": 79
  },
  {
    "note": 65,
    "time": 48122,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 48128,
    "velocity": 92
  },
  {
    "note": 62,
    "time": 48180,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 48180,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 48186,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 48192,
    "velocity": 64
  },
  {
    "note": 62,
    "time": 48192,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 48192,
    "velocity": 80
  },
  {
    "note": 65,
    "time": 48250,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 48256,
    "velocity": 95
  },
  {
    "note": 62,
    "time": 48308,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 48308,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 48314,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 48320,
    "velocity": 89
  },
  {
    "note": 56,
    "time": 48320,
    "velocity": 81
  },
  {
    "note": 74,
    "time": 48384,
    "velocity": 70
  },
  {
    "note": 74,
    "time": 48442,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 48448,
    "velocity": 73
  },
  {
    "note": 73,
    "time": 48506,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 48512,
    "velocity": 82
  },
  {
    "note": 64,
    "time": 48551,
    "velocity": 0
  },
  {
    "note": 56,
    "time": 48551,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 48570,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 48576,
    "velocity": 75
  },
  {
    "note": 71,
    "time": 48634,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 48640,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 48698,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 48704,
    "velocity": 77
  },
  {
    "note": 73,
    "time": 48762,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 48768,
    "velocity": 73
  },
  {
    "note": 71,
    "time": 48826,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 48832,
    "velocity": 83
  },
  {
    "note": 69,
    "time": 48896,
    "velocity": 72
  },
  {
    "note": 69,
    "time": 48954,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 48960,
    "velocity": 74
  },
  {
    "note": 67,
    "time": 49018,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 49024,
    "velocity": 84
  },
  {
    "note": 73,
    "time": 49063,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 49082,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 49088,
    "velocity": 71
  },
  {
    "note": 64,
    "time": 49146,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 49152,
    "velocity": 83
  },
  {
    "note": 67,
    "time": 49210,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 49216,
    "velocity": 75
  },
  {
    "note": 65,
    "time": 49274,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 49280,
    "velocity": 74
  },
  {
    "note": 64,
    "time": 49338,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 49344,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 49408,
    "velocity": 72
  },
  {
    "note": 74,
    "time": 49466,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 49472,
    "velocity": 73
  },
  {
    "note": 73,
    "time": 49530,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 49536,
    "velocity": 82
  },
  {
    "note": 65,
    "time": 49575,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 49594,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 49600,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 49600,
    "velocity": 71
  },
  {
    "note": 77,
    "time": 49658,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 49664,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 49722,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 49728,
    "velocity": 74
  },
  {
    "note": 73,
    "time": 49786,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 49792,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 49831,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 49850,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 49856,
    "velocity": 83
  },
  {
    "note": 57,
    "time": 49856,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 49914,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 49920,
    "velocity": 98
  },
  {
    "note": 69,
    "time": 49978,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 49984,
    "velocity": 78
  },
  {
    "note": 67,
    "time": 50042,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 50048,
    "velocity": 86
  },
  {
    "note": 73,
    "time": 50087,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 50106,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 50112,
    "velocity": 88
  },
  {
    "note": 61,
    "time": 50112,
    "velocity": 66
  },
  {
    "note": 61,
    "time": 50170,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 50176,
    "velocity": 89
  },
  {
    "note": 67,
    "time": 50234,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 50240,
    "velocity": 75
  },
  {
    "note": 65,
    "time": 50298,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 50304,
    "velocity": 77
  },
  {
    "note": 64,
    "time": 50362,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 50368,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 50432,
    "velocity": 70
  },
  {
    "note": 76,
    "time": 50484,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 50490,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 50496,
    "velocity": 74
  },
  {
    "note": 61,
    "time": 50496,
    "velocity": 74
  },
  {
    "note": 61,
    "time": 50554,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 50560,
    "velocity": 82
  },
  {
    "note": 65,
    "time": 50599,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 50618,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 50624,
    "velocity": 75
  },
  {
    "note": 57,
    "time": 50624,
    "velocity": 73
  },
  {
    "note": 57,
    "time": 50682,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 50688,
    "velocity": 78
  },
  {
    "note": 74,
    "time": 50740,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 50746,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 50752,
    "velocity": 77
  },
  {
    "note": 55,
    "time": 50752,
    "velocity": 74
  },
  {
    "note": 55,
    "time": 50810,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 50816,
    "velocity": 85
  },
  {
    "note": 64,
    "time": 50855,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 50868,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 50874,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 50880,
    "velocity": 73
  },
  {
    "note": 62,
    "time": 50880,
    "velocity": 77
  },
  {
    "note": 54,
    "time": 50880,
    "velocity": 75
  },
  {
    "note": 54,
    "time": 50938,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 50944,
    "velocity": 96
  },
  {
    "note": 62,
    "time": 50996,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 51002,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 51008,
    "velocity": 92
  },
  {
    "note": 60,
    "time": 51008,
    "velocity": 78
  },
  {
    "note": 60,
    "time": 51066,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 51072,
    "velocity": 87
  },
  {
    "note": 72,
    "time": 51111,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 51130,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 51136,
    "velocity": 74
  },
  {
    "note": 55,
    "time": 51136,
    "velocity": 69
  },
  {
    "note": 55,
    "time": 51194,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 51200,
    "velocity": 95
  },
  {
    "note": 69,
    "time": 51252,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 51258,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 51264,
    "velocity": 76
  },
  {
    "note": 63,
    "time": 51264,
    "velocity": 79
  },
  {
    "note": 63,
    "time": 51322,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 51328,
    "velocity": 76
  },
  {
    "note": 70,
    "time": 51367,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 51386,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 51392,
    "velocity": 77
  },
  {
    "note": 61,
    "time": 51392,
    "velocity": 79
  },
  {
    "note": 61,
    "time": 51450,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 51456,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 51514,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 51520,
    "velocity": 67
  },
  {
    "note": 57,
    "time": 51578,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 51584,
    "velocity": 84
  },
  {
    "note": 69,
    "time": 51623,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 51623,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 51642,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 51648,
    "velocity": 78
  },
  {
    "note": 66,
    "time": 51648,
    "velocity": 78
  },
  {
    "note": 50,
    "time": 51648,
    "velocity": 63
  },
  {
    "note": 50,
    "time": 51706,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 51712,
    "velocity": 99
  },
  {
    "note": 63,
    "time": 51770,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 51776,
    "velocity": 77
  },
  {
    "note": 62,
    "time": 51834,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 51840,
    "velocity": 77
  },
  {
    "note": 69,
    "time": 51879,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 51879,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 51898,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 51904,
    "velocity": 76
  },
  {
    "note": 65,
    "time": 51904,
    "velocity": 77
  },
  {
    "note": 59,
    "time": 51904,
    "velocity": 79
  },
  {
    "note": 59,
    "time": 51962,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 51968,
    "velocity": 88
  },
  {
    "note": 62,
    "time": 52026,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 52032,
    "velocity": 65
  },
  {
    "note": 55,
    "time": 52090,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 52096,
    "velocity": 86
  },
  {
    "note": 67,
    "time": 52135,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 52135,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 52154,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 52160,
    "velocity": 81
  },
  {
    "note": 63,
    "time": 52160,
    "velocity": 74
  },
  {
    "note": 48,
    "time": 52160,
    "velocity": 65
  },
  {
    "note": 48,
    "time": 52218,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 52224,
    "velocity": 96
  },
  {
    "note": 62,
    "time": 52282,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 52288,
    "velocity": 80
  },
  {
    "note": 60,
    "time": 52346,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 52352,
    "velocity": 76
  },
  {
    "note": 67,
    "time": 52391,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 52391,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 52410,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 52416,
    "velocity": 78
  },
  {
    "note": 63,
    "time": 52416,
    "velocity": 84
  },
  {
    "note": 57,
    "time": 52416,
    "velocity": 76
  },
  {
    "note": 57,
    "time": 52474,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 52480,
    "velocity": 85
  },
  {
    "note": 66,
    "time": 52532,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 52532,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 52538,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 52544,
    "velocity": 85
  },
  {
    "note": 62,
    "time": 52544,
    "velocity": 77
  },
  {
    "note": 54,
    "time": 52544,
    "velocity": 67
  },
  {
    "note": 54,
    "time": 52602,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 52608,
    "velocity": 85
  },
  {
    "note": 62,
    "time": 52660,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 52666,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 52672,
    "velocity": 89
  },
  {
    "note": 50,
    "time": 52672,
    "velocity": 68
  },
  {
    "note": 50,
    "time": 52730,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 52736,
    "velocity": 96
  },
  {
    "note": 69,
    "time": 52775,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 52788,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 52794,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 52800,
    "velocity": 94
  },
  {
    "note": 72,
    "time": 52800,
    "velocity": 92
  },
  {
    "note": 58,
    "time": 52800,
    "velocity": 77
  },
  {
    "note": 58,
    "time": 52858,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 52864,
    "velocity": 77
  },
  {
    "note": 75,
    "time": 52916,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 52916,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 52922,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 52928,
    "velocity": 79
  },
  {
    "note": 72,
    "time": 52928,
    "velocity": 87
  },
  {
    "note": 58,
    "time": 52928,
    "velocity": 85
  },
  {
    "note": 58,
    "time": 52986,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 52992,
    "velocity": 99
  },
  {
    "note": 72,
    "time": 53044,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 53050,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 53056,
    "velocity": 75
  },
  {
    "note": 67,
    "time": 53056,
    "velocity": 79
  },
  {
    "note": 70,
    "time": 53114,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 53114,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 53120,
    "velocity": 76
  },
  {
    "note": 66,
    "time": 53120,
    "velocity": 76
  },
  {
    "note": 74,
    "time": 53159,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 53178,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 53178,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 53184,
    "velocity": 85
  },
  {
    "note": 67,
    "time": 53184,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 53242,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 53248,
    "velocity": 62
  },
  {
    "note": 70,
    "time": 53300,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 53306,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 53312,
    "velocity": 71
  },
  {
    "note": 70,
    "time": 53312,
    "velocity": 78
  },
  {
    "note": 57,
    "time": 53312,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 53370,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 53376,
    "velocity": 72
  },
  {
    "note": 70,
    "time": 53428,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 53434,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 53440,
    "velocity": 78
  },
  {
    "note": 62,
    "time": 53440,
    "velocity": 96
  },
  {
    "note": 38,
    "time": 53504,
    "velocity": 71
  },
  {
    "note": 79,
    "time": 53556,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 53562,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 53568,
    "velocity": 75
  },
  {
    "note": 36,
    "time": 53568,
    "velocity": 98
  },
  {
    "note": 48,
    "time": 53568,
    "velocity": 95
  },
  {
    "note": 36,
    "time": 53626,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 53626,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 53632,
    "velocity": 64
  },
  {
    "note": 69,
    "time": 53671,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 53671,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 53684,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 53690,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 53696,
    "velocity": 81
  },
  {
    "note": 74,
    "time": 53696,
    "velocity": 93
  },
  {
    "note": 34,
    "time": 53696,
    "velocity": 96
  },
  {
    "note": 46,
    "time": 53696,
    "velocity": 95
  },
  {
    "note": 34,
    "time": 53754,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 53754,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 53760,
    "velocity": 66
  },
  {
    "note": 74,
    "time": 53812,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 53818,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 53824,
    "velocity": 76
  },
  {
    "note": 72,
    "time": 53824,
    "velocity": 78
  },
  {
    "note": 33,
    "time": 53824,
    "velocity": 91
  },
  {
    "note": 45,
    "time": 53824,
    "velocity": 91
  },
  {
    "note": 33,
    "time": 53882,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 53882,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 53888,
    "velocity": 68
  },
  {
    "note": 79,
    "time": 53927,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 53940,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 53940,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 53946,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 53952,
    "velocity": 80
  },
  {
    "note": 70,
    "time": 53952,
    "velocity": 80
  },
  {
    "note": 31,
    "time": 53952,
    "velocity": 91
  },
  {
    "note": 43,
    "time": 53952,
    "velocity": 90
  },
  {
    "note": 31,
    "time": 54010,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 54010,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54016,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 54068,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 54068,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54074,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 54080,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 54080,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 54080,
    "velocity": 89
  },
  {
    "note": 30,
    "time": 54080,
    "velocity": 89
  },
  {
    "note": 42,
    "time": 54080,
    "velocity": 87
  },
  {
    "note": 30,
    "time": 54138,
    "velocity": 0
  },
  {
    "note": 42,
    "time": 54138,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54144,
    "velocity": 72
  },
  {
    "note": 62,
    "time": 54196,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 54196,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 54196,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54202,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 54208,
    "velocity": 86
  },
  {
    "note": 70,
    "time": 54208,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 54208,
    "velocity": 82
  },
  {
    "note": 31,
    "time": 54208,
    "velocity": 94
  },
  {
    "note": 43,
    "time": 54208,
    "velocity": 93
  },
  {
    "note": 31,
    "time": 54266,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 54266,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54272,
    "velocity": 68
  },
  {
    "note": 62,
    "time": 54324,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 54324,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 54324,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54330,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 54336,
    "velocity": 80
  },
  {
    "note": 66,
    "time": 54336,
    "velocity": 80
  },
  {
    "note": 74,
    "time": 54336,
    "velocity": 81
  },
  {
    "note": 33,
    "time": 54336,
    "velocity": 91
  },
  {
    "note": 45,
    "time": 54336,
    "velocity": 93
  },
  {
    "note": 33,
    "time": 54394,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 54394,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54400,
    "velocity": 65
  },
  {
    "note": 60,
    "time": 54452,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 54452,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 54452,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54458,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 54464,
    "velocity": 83
  },
  {
    "note": 67,
    "time": 54464,
    "velocity": 82
  },
  {
    "note": 74,
    "time": 54464,
    "velocity": 85
  },
  {
    "note": 34,
    "time": 54464,
    "velocity": 97
  },
  {
    "note": 46,
    "time": 54464,
    "velocity": 98
  },
  {
    "note": 34,
    "time": 54522,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 54522,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54528,
    "velocity": 68
  },
  {
    "note": 58,
    "time": 54580,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 54580,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 54580,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54586,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 54592,
    "velocity": 79
  },
  {
    "note": 66,
    "time": 54592,
    "velocity": 81
  },
  {
    "note": 74,
    "time": 54592,
    "velocity": 78
  },
  {
    "note": 26,
    "time": 54592,
    "velocity": 79
  },
  {
    "note": 38,
    "time": 54592,
    "velocity": 78
  },
  {
    "note": 26,
    "time": 54650,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54650,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54656,
    "velocity": 79
  },
  {
    "note": 62,
    "time": 54708,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 54708,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 54708,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54714,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 54720,
    "velocity": 82
  },
  {
    "note": 67,
    "time": 54720,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 54720,
    "velocity": 85
  },
  {
    "note": 28,
    "time": 54720,
    "velocity": 89
  },
  {
    "note": 40,
    "time": 54720,
    "velocity": 86
  },
  {
    "note": 28,
    "time": 54778,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 54778,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54784,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 54836,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 54836,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 54836,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54842,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 54848,
    "velocity": 79
  },
  {
    "note": 69,
    "time": 54848,
    "velocity": 79
  },
  {
    "note": 74,
    "time": 54848,
    "velocity": 79
  },
  {
    "note": 30,
    "time": 54848,
    "velocity": 89
  },
  {
    "note": 42,
    "time": 54848,
    "velocity": 87
  },
  {
    "note": 30,
    "time": 54906,
    "velocity": 0
  },
  {
    "note": 42,
    "time": 54906,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54912,
    "velocity": 73
  },
  {
    "note": 60,
    "time": 54964,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 54964,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 54964,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 54970,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 54976,
    "velocity": 81
  },
  {
    "note": 70,
    "time": 54976,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 54976,
    "velocity": 84
  },
  {
    "note": 31,
    "time": 54976,
    "velocity": 90
  },
  {
    "note": 43,
    "time": 54976,
    "velocity": 92
  },
  {
    "note": 31,
    "time": 55034,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 55034,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55040,
    "velocity": 72
  },
  {
    "note": 58,
    "time": 55092,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 55092,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 55092,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55098,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 55104,
    "velocity": 79
  },
  {
    "note": 69,
    "time": 55104,
    "velocity": 79
  },
  {
    "note": 74,
    "time": 55104,
    "velocity": 79
  },
  {
    "note": 30,
    "time": 55104,
    "velocity": 87
  },
  {
    "note": 42,
    "time": 55104,
    "velocity": 88
  },
  {
    "note": 30,
    "time": 55162,
    "velocity": 0
  },
  {
    "note": 42,
    "time": 55162,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55168,
    "velocity": 72
  },
  {
    "note": 62,
    "time": 55220,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 55220,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 55220,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55226,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 55232,
    "velocity": 82
  },
  {
    "note": 70,
    "time": 55232,
    "velocity": 83
  },
  {
    "note": 74,
    "time": 55232,
    "velocity": 84
  },
  {
    "note": 31,
    "time": 55232,
    "velocity": 92
  },
  {
    "note": 43,
    "time": 55232,
    "velocity": 91
  },
  {
    "note": 31,
    "time": 55290,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 55290,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55296,
    "velocity": 68
  },
  {
    "note": 62,
    "time": 55348,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 55348,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 55348,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55354,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 55360,
    "velocity": 81
  },
  {
    "note": 66,
    "time": 55360,
    "velocity": 82
  },
  {
    "note": 74,
    "time": 55360,
    "velocity": 79
  },
  {
    "note": 33,
    "time": 55360,
    "velocity": 92
  },
  {
    "note": 45,
    "time": 55360,
    "velocity": 92
  },
  {
    "note": 33,
    "time": 55418,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 55418,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55424,
    "velocity": 67
  },
  {
    "note": 60,
    "time": 55476,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 55476,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 55476,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 55482,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 55488,
    "velocity": 76
  },
  {
    "note": 74,
    "time": 55488,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 55488,
    "velocity": 62
  },
  {
    "note": 34,
    "time": 55488,
    "velocity": 76
  },
  {
    "note": 46,
    "time": 55488,
    "velocity": 72
  },
  {
    "note": 67,
    "time": 55546,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 55546,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 55552,
    "velocity": 72
  },
  {
    "note": 79,
    "time": 55552,
    "velocity": 69
  },
  {
    "note": 70,
    "time": 55610,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 55610,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 55616,
    "velocity": 59
  },
  {
    "note": 77,
    "time": 55616,
    "velocity": 60
  },
  {
    "note": 69,
    "time": 55674,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 55674,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 55680,
    "velocity": 66
  },
  {
    "note": 79,
    "time": 55680,
    "velocity": 64
  },
  {
    "note": 62,
    "time": 55719,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 55719,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 55719,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 55738,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 55738,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 55744,
    "velocity": 60
  },
  {
    "note": 76,
    "time": 55744,
    "velocity": 62
  },
  {
    "note": 67,
    "time": 55802,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 55802,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 55808,
    "velocity": 65
  },
  {
    "note": 77,
    "time": 55808,
    "velocity": 65
  },
  {
    "note": 69,
    "time": 55866,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 55866,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 55872,
    "velocity": 58
  },
  {
    "note": 74,
    "time": 55872,
    "velocity": 58
  },
  {
    "note": 35,
    "time": 55872,
    "velocity": 72
  },
  {
    "note": 47,
    "time": 55872,
    "velocity": 70
  },
  {
    "note": 65,
    "time": 55930,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 55930,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 55936,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 55936,
    "velocity": 63
  },
  {
    "note": 35,
    "time": 55988,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 55988,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 55994,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 55994,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 56000,
    "velocity": 59
  },
  {
    "note": 72,
    "time": 56000,
    "velocity": 58
  },
  {
    "note": 36,
    "time": 56000,
    "velocity": 86
  },
  {
    "note": 48,
    "time": 56000,
    "velocity": 85
  },
  {
    "note": 64,
    "time": 56058,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 56058,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 56064,
    "velocity": 76
  },
  {
    "note": 81,
    "time": 56064,
    "velocity": 76
  },
  {
    "note": 36,
    "time": 56116,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 56116,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 56122,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 56122,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 56128,
    "velocity": 62
  },
  {
    "note": 79,
    "time": 56128,
    "velocity": 63
  },
  {
    "note": 70,
    "time": 56186,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 56186,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 56192,
    "velocity": 70
  },
  {
    "note": 81,
    "time": 56192,
    "velocity": 72
  },
  {
    "note": 72,
    "time": 56250,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 56250,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 56256,
    "velocity": 63
  },
  {
    "note": 77,
    "time": 56256,
    "velocity": 64
  },
  {
    "note": 69,
    "time": 56314,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 56314,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 56320,
    "velocity": 72
  },
  {
    "note": 79,
    "time": 56320,
    "velocity": 72
  },
  {
    "note": 70,
    "time": 56378,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 56378,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 56384,
    "velocity": 68
  },
  {
    "note": 76,
    "time": 56384,
    "velocity": 68
  },
  {
    "note": 37,
    "time": 56384,
    "velocity": 74
  },
  {
    "note": 49,
    "time": 56384,
    "velocity": 75
  },
  {
    "note": 67,
    "time": 56442,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 56442,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 56448,
    "velocity": 74
  },
  {
    "note": 77,
    "time": 56448,
    "velocity": 74
  },
  {
    "note": 37,
    "time": 56500,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 56500,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 56506,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 56506,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 56512,
    "velocity": 71
  },
  {
    "note": 74,
    "time": 56512,
    "velocity": 72
  },
  {
    "note": 38,
    "time": 56512,
    "velocity": 92
  },
  {
    "note": 50,
    "time": 56512,
    "velocity": 88
  },
  {
    "note": 65,
    "time": 56570,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 56570,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 56576,
    "velocity": 88
  },
  {
    "note": 82,
    "time": 56576,
    "velocity": 87
  },
  {
    "note": 38,
    "time": 56628,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 56628,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 56634,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 56634,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 56640,
    "velocity": 74
  },
  {
    "note": 81,
    "time": 56640,
    "velocity": 75
  },
  {
    "note": 72,
    "time": 56698,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 56698,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 56704,
    "velocity": 83
  },
  {
    "note": 82,
    "time": 56704,
    "velocity": 81
  },
  {
    "note": 74,
    "time": 56762,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 56762,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 56768,
    "velocity": 76
  },
  {
    "note": 79,
    "time": 56768,
    "velocity": 75
  },
  {
    "note": 70,
    "time": 56826,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 56826,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 56832,
    "velocity": 87
  },
  {
    "note": 81,
    "time": 56832,
    "velocity": 85
  },
  {
    "note": 72,
    "time": 56890,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 56890,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 56896,
    "velocity": 74
  },
  {
    "note": 77,
    "time": 56896,
    "velocity": 73
  },
  {
    "note": 38,
    "time": 56896,
    "velocity": 81
  },
  {
    "note": 50,
    "time": 56896,
    "velocity": 79
  },
  {
    "note": 69,
    "time": 56954,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 56954,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 56960,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 56960,
    "velocity": 88
  },
  {
    "note": 38,
    "time": 57012,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 57012,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 57018,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 57018,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 57024,
    "velocity": 82
  },
  {
    "note": 76,
    "time": 57024,
    "velocity": 84
  },
  {
    "note": 40,
    "time": 57024,
    "velocity": 99
  },
  {
    "note": 52,
    "time": 57024,
    "velocity": 99
  },
  {
    "note": 67,
    "time": 57082,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 57082,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 57088,
    "velocity": 104
  },
  {
    "note": 84,
    "time": 57088,
    "velocity": 103
  },
  {
    "note": 40,
    "time": 57140,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 57140,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 57146,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 57146,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 57152,
    "velocity": 85
  },
  {
    "note": 82,
    "time": 57152,
    "velocity": 88
  },
  {
    "note": 74,
    "time": 57210,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 57210,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 57216,
    "velocity": 95
  },
  {
    "note": 84,
    "time": 57216,
    "velocity": 94
  },
  {
    "note": 76,
    "time": 57274,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 57274,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 57280,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 57280,
    "velocity": 86
  },
  {
    "note": 72,
    "time": 57338,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 57338,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 57344,
    "velocity": 95
  },
  {
    "note": 82,
    "time": 57344,
    "velocity": 97
  },
  {
    "note": 74,
    "time": 57402,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 57402,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 57408,
    "velocity": 88
  },
  {
    "note": 79,
    "time": 57408,
    "velocity": 84
  },
  {
    "note": 40,
    "time": 57408,
    "velocity": 85
  },
  {
    "note": 52,
    "time": 57408,
    "velocity": 85
  },
  {
    "note": 70,
    "time": 57466,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 57466,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 57472,
    "velocity": 100
  },
  {
    "note": 81,
    "time": 57472,
    "velocity": 101
  },
  {
    "note": 40,
    "time": 57524,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 57524,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 57530,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 57530,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 57536,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 57536,
    "velocity": 70
  },
  {
    "note": 41,
    "time": 57536,
    "velocity": 103
  },
  {
    "note": 53,
    "time": 57536,
    "velocity": 105
  },
  {
    "note": 77,
    "time": 57594,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 57599,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 57599,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 57600,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 57652,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 57658,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 57664,
    "velocity": 89
  },
  {
    "note": 65,
    "time": 57664,
    "velocity": 66
  },
  {
    "note": 33,
    "time": 57664,
    "velocity": 76
  },
  {
    "note": 45,
    "time": 57664,
    "velocity": 76
  },
  {
    "note": 74,
    "time": 57722,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 57727,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 57727,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 57728,
    "velocity": 90
  },
  {
    "note": 65,
    "time": 57780,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 57786,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 57792,
    "velocity": 103
  },
  {
    "note": 70,
    "time": 57792,
    "velocity": 86
  },
  {
    "note": 34,
    "time": 57792,
    "velocity": 99
  },
  {
    "note": 46,
    "time": 57792,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 57850,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 57850,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 57855,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 57855,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 57856,
    "velocity": 85
  },
  {
    "note": 69,
    "time": 57856,
    "velocity": 70
  },
  {
    "note": 72,
    "time": 57914,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 57914,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 57920,
    "velocity": 81
  },
  {
    "note": 67,
    "time": 57920,
    "velocity": 64
  },
  {
    "note": 38,
    "time": 57920,
    "velocity": 99
  },
  {
    "note": 50,
    "time": 57920,
    "velocity": 96
  },
  {
    "note": 70,
    "time": 57978,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 57978,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 57983,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 57983,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 57984,
    "velocity": 78
  },
  {
    "note": 65,
    "time": 57984,
    "velocity": 60
  },
  {
    "note": 69,
    "time": 58042,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 58042,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 58048,
    "velocity": 88
  },
  {
    "note": 67,
    "time": 58048,
    "velocity": 64
  },
  {
    "note": 31,
    "time": 58048,
    "velocity": 68
  },
  {
    "note": 43,
    "time": 58048,
    "velocity": 66
  },
  {
    "note": 70,
    "time": 58106,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 58112,
    "velocity": 85
  },
  {
    "note": 67,
    "time": 58164,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 58170,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 58174,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 58174,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 58176,
    "velocity": 65
  },
  {
    "note": 67,
    "time": 58176,
    "velocity": 49
  },
  {
    "note": 70,
    "time": 58234,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 58234,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 58240,
    "velocity": 64
  },
  {
    "note": 65,
    "time": 58240,
    "velocity": 46
  },
  {
    "note": 69,
    "time": 58298,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 58298,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 58304,
    "velocity": 65
  },
  {
    "note": 64,
    "time": 58304,
    "velocity": 44
  },
  {
    "note": 67,
    "time": 58362,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 58368,
    "velocity": 63
  },
  {
    "note": 64,
    "time": 58420,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 58426,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 58432,
    "velocity": 51
  },
  {
    "note": 64,
    "time": 58432,
    "velocity": 33
  },
  {
    "note": 34,
    "time": 58432,
    "velocity": 94
  },
  {
    "note": 46,
    "time": 58432,
    "velocity": 93
  },
  {
    "note": 67,
    "time": 58490,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 58490,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 58496,
    "velocity": 51
  },
  {
    "note": 62,
    "time": 58496,
    "velocity": 28
  },
  {
    "note": 65,
    "time": 58554,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 58554,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 58560,
    "velocity": 48
  },
  {
    "note": 60,
    "time": 58560,
    "velocity": 28
  },
  {
    "note": 64,
    "time": 58618,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 58618,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 58624,
    "velocity": 50
  },
  {
    "note": 62,
    "time": 58624,
    "velocity": 28
  },
  {
    "note": 34,
    "time": 58676,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 58676,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 58682,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 58682,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 58688,
    "velocity": 54
  },
  {
    "note": 64,
    "time": 58688,
    "velocity": 27
  },
  {
    "note": 33,
    "time": 58688,
    "velocity": 65
  },
  {
    "note": 45,
    "time": 58688,
    "velocity": 68
  },
  {
    "note": 67,
    "time": 58746,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 58746,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 58752,
    "velocity": 54
  },
  {
    "note": 65,
    "time": 58752,
    "velocity": 29
  },
  {
    "note": 33,
    "time": 58804,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 58804,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 58810,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 58810,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 58816,
    "velocity": 52
  },
  {
    "note": 67,
    "time": 58816,
    "velocity": 33
  },
  {
    "note": 31,
    "time": 58816,
    "velocity": 69
  },
  {
    "note": 43,
    "time": 58816,
    "velocity": 69
  },
  {
    "note": 70,
    "time": 58874,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 58880,
    "velocity": 54
  },
  {
    "note": 67,
    "time": 58932,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 58932,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 58932,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 58938,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 58944,
    "velocity": 46
  },
  {
    "note": 64,
    "time": 58944,
    "velocity": 25
  },
  {
    "note": 36,
    "time": 58944,
    "velocity": 80
  },
  {
    "note": 48,
    "time": 58944,
    "velocity": 77
  },
  {
    "note": 72,
    "time": 59002,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 59008,
    "velocity": 44
  },
  {
    "note": 64,
    "time": 59060,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 59060,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 59060,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 59066,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 59072,
    "velocity": 28
  },
  {
    "note": 69,
    "time": 59072,
    "velocity": 56
  },
  {
    "note": 29,
    "time": 59072,
    "velocity": 60
  },
  {
    "note": 41,
    "time": 59072,
    "velocity": 57
  },
  {
    "note": 72,
    "time": 59136,
    "velocity": 31
  },
  {
    "note": 60,
    "time": 59136,
    "velocity": 32
  },
  {
    "note": 72,
    "time": 59194,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 59194,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 59200,
    "velocity": 32
  },
  {
    "note": 58,
    "time": 59200,
    "velocity": 34
  },
  {
    "note": 70,
    "time": 59258,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 59258,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 59264,
    "velocity": 38
  },
  {
    "note": 60,
    "time": 59264,
    "velocity": 37
  },
  {
    "note": 65,
    "time": 59303,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 59303,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 59303,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 59303,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 59322,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 59322,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 59328,
    "velocity": 48
  },
  {
    "note": 57,
    "time": 59328,
    "velocity": 46
  },
  {
    "note": 69,
    "time": 59328,
    "velocity": 44
  },
  {
    "note": 84,
    "time": 59386,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 59386,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 59386,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 59392,
    "velocity": 26
  },
  {
    "note": 60,
    "time": 59392,
    "velocity": 27
  },
  {
    "note": 72,
    "time": 59450,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 59450,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 59456,
    "velocity": 42
  },
  {
    "note": 55,
    "time": 59456,
    "velocity": 41
  },
  {
    "note": 67,
    "time": 59456,
    "velocity": 39
  },
  {
    "note": 82,
    "time": 59514,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 59514,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 59514,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 59520,
    "velocity": 28
  },
  {
    "note": 60,
    "time": 59520,
    "velocity": 28
  },
  {
    "note": 72,
    "time": 59578,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 59578,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 59584,
    "velocity": 43
  },
  {
    "note": 53,
    "time": 59584,
    "velocity": 41
  },
  {
    "note": 65,
    "time": 59584,
    "velocity": 42
  },
  {
    "note": 81,
    "time": 59642,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 59642,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 59642,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 59648,
    "velocity": 28
  },
  {
    "note": 60,
    "time": 59648,
    "velocity": 29
  },
  {
    "note": 72,
    "time": 59706,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 59706,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 59712,
    "velocity": 40
  },
  {
    "note": 52,
    "time": 59712,
    "velocity": 37
  },
  {
    "note": 64,
    "time": 59712,
    "velocity": 38
  },
  {
    "note": 79,
    "time": 59770,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 59770,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 59770,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 59776,
    "velocity": 28
  },
  {
    "note": 60,
    "time": 59776,
    "velocity": 30
  },
  {
    "note": 72,
    "time": 59834,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 59834,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 59840,
    "velocity": 44
  },
  {
    "note": 53,
    "time": 59840,
    "velocity": 43
  },
  {
    "note": 65,
    "time": 59840,
    "velocity": 42
  },
  {
    "note": 81,
    "time": 59898,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 59898,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 59898,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 59904,
    "velocity": 27
  },
  {
    "note": 60,
    "time": 59904,
    "velocity": 28
  },
  {
    "note": 72,
    "time": 59962,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 59962,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 59968,
    "velocity": 43
  },
  {
    "note": 55,
    "time": 59968,
    "velocity": 40
  },
  {
    "note": 67,
    "time": 59968,
    "velocity": 39
  },
  {
    "note": 82,
    "time": 60026,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 60026,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 60026,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60032,
    "velocity": 28
  },
  {
    "note": 60,
    "time": 60032,
    "velocity": 27
  },
  {
    "note": 72,
    "time": 60090,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60090,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 60096,
    "velocity": 47
  },
  {
    "note": 57,
    "time": 60096,
    "velocity": 46
  },
  {
    "note": 69,
    "time": 60096,
    "velocity": 44
  },
  {
    "note": 84,
    "time": 60154,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 60154,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 60154,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60160,
    "velocity": 27
  },
  {
    "note": 60,
    "time": 60160,
    "velocity": 27
  },
  {
    "note": 72,
    "time": 60218,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60218,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 60224,
    "velocity": 38
  },
  {
    "note": 48,
    "time": 60224,
    "velocity": 33
  },
  {
    "note": 60,
    "time": 60224,
    "velocity": 31
  },
  {
    "note": 76,
    "time": 60282,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 60282,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60282,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60288,
    "velocity": 32
  },
  {
    "note": 60,
    "time": 60288,
    "velocity": 37
  },
  {
    "note": 72,
    "time": 60346,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60346,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 60352,
    "velocity": 40
  },
  {
    "note": 50,
    "time": 60352,
    "velocity": 39
  },
  {
    "note": 62,
    "time": 60352,
    "velocity": 38
  },
  {
    "note": 77,
    "time": 60410,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 60410,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 60410,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60416,
    "velocity": 28
  },
  {
    "note": 60,
    "time": 60416,
    "velocity": 32
  },
  {
    "note": 72,
    "time": 60474,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60474,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 60480,
    "velocity": 39
  },
  {
    "note": 52,
    "time": 60480,
    "velocity": 38
  },
  {
    "note": 64,
    "time": 60480,
    "velocity": 39
  },
  {
    "note": 79,
    "time": 60538,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 60538,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 60538,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60544,
    "velocity": 28
  },
  {
    "note": 60,
    "time": 60544,
    "velocity": 30
  },
  {
    "note": 72,
    "time": 60602,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60602,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 60608,
    "velocity": 42
  },
  {
    "note": 53,
    "time": 60608,
    "velocity": 43
  },
  {
    "note": 65,
    "time": 60608,
    "velocity": 43
  },
  {
    "note": 81,
    "time": 60666,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 60666,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 60666,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60672,
    "velocity": 27
  },
  {
    "note": 60,
    "time": 60672,
    "velocity": 29
  },
  {
    "note": 72,
    "time": 60730,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60730,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 60736,
    "velocity": 39
  },
  {
    "note": 52,
    "time": 60736,
    "velocity": 36
  },
  {
    "note": 64,
    "time": 60736,
    "velocity": 37
  },
  {
    "note": 79,
    "time": 60794,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 60794,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 60794,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60800,
    "velocity": 30
  },
  {
    "note": 60,
    "time": 60800,
    "velocity": 30
  },
  {
    "note": 72,
    "time": 60858,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60858,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 60864,
    "velocity": 46
  },
  {
    "note": 53,
    "time": 60864,
    "velocity": 42
  },
  {
    "note": 65,
    "time": 60864,
    "velocity": 41
  },
  {
    "note": 81,
    "time": 60922,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 60922,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 60922,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 60928,
    "velocity": 27
  },
  {
    "note": 60,
    "time": 60928,
    "velocity": 31
  },
  {
    "note": 72,
    "time": 60986,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 60986,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 60992,
    "velocity": 42
  },
  {
    "note": 55,
    "time": 60992,
    "velocity": 39
  },
  {
    "note": 67,
    "time": 60992,
    "velocity": 39
  },
  {
    "note": 82,
    "time": 61050,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 61050,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 61050,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 61056,
    "velocity": 27
  },
  {
    "note": 60,
    "time": 61056,
    "velocity": 28
  },
  {
    "note": 60,
    "time": 61114,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 61120,
    "velocity": 47
  },
  {
    "note": 57,
    "time": 61120,
    "velocity": 32
  },
  {
    "note": 69,
    "time": 61120,
    "velocity": 29
  },
  {
    "note": 72,
    "time": 61178,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 61178,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 61184,
    "velocity": 34
  },
  {
    "note": 70,
    "time": 61184,
    "velocity": 31
  },
  {
    "note": 82,
    "time": 61242,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 61242,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 61248,
    "velocity": 34
  },
  {
    "note": 69,
    "time": 61248,
    "velocity": 32
  },
  {
    "note": 81,
    "time": 61306,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 61306,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 61312,
    "velocity": 33
  },
  {
    "note": 67,
    "time": 61312,
    "velocity": 31
  },
  {
    "note": 57,
    "time": 61351,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 61351,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 61370,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 61370,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 61376,
    "velocity": 35
  },
  {
    "note": 65,
    "time": 61376,
    "velocity": 36
  },
  {
    "note": 77,
    "time": 61434,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 61434,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 61440,
    "velocity": 32
  },
  {
    "note": 63,
    "time": 61440,
    "velocity": 33
  },
  {
    "note": 75,
    "time": 61498,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 61498,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 61504,
    "velocity": 33
  },
  {
    "note": 62,
    "time": 61504,
    "velocity": 31
  },
  {
    "note": 74,
    "time": 61562,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 61562,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 61568,
    "velocity": 33
  },
  {
    "note": 60,
    "time": 61568,
    "velocity": 30
  },
  {
    "note": 72,
    "time": 61626,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 61626,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 61632,
    "velocity": 45
  },
  {
    "note": 74,
    "time": 61632,
    "velocity": 46
  },
  {
    "note": 58,
    "time": 61632,
    "velocity": 32
  },
  {
    "note": 70,
    "time": 61632,
    "velocity": 36
  },
  {
    "note": 86,
    "time": 61690,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 61690,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 61696,
    "velocity": 35
  },
  {
    "note": 72,
    "time": 61696,
    "velocity": 32
  },
  {
    "note": 58,
    "time": 61748,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 61748,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 61754,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 61754,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 61760,
    "velocity": 31
  },
  {
    "note": 70,
    "time": 61760,
    "velocity": 31
  },
  {
    "note": 82,
    "time": 61818,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 61818,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 61824,
    "velocity": 31
  },
  {
    "note": 69,
    "time": 61824,
    "velocity": 35
  },
  {
    "note": 81,
    "time": 61882,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 61882,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 61888,
    "velocity": 35
  },
  {
    "note": 67,
    "time": 61888,
    "velocity": 37
  },
  {
    "note": 79,
    "time": 61946,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 61946,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 61952,
    "velocity": 32
  },
  {
    "note": 65,
    "time": 61952,
    "velocity": 34
  },
  {
    "note": 77,
    "time": 62010,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 62010,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 62016,
    "velocity": 32
  },
  {
    "note": 64,
    "time": 62016,
    "velocity": 32
  },
  {
    "note": 76,
    "time": 62074,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 62074,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 62080,
    "velocity": 33
  },
  {
    "note": 62,
    "time": 62080,
    "velocity": 34
  },
  {
    "note": 74,
    "time": 62138,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 62138,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 62144,
    "velocity": 48
  },
  {
    "note": 76,
    "time": 62144,
    "velocity": 49
  },
  {
    "note": 60,
    "time": 62144,
    "velocity": 34
  },
  {
    "note": 72,
    "time": 62144,
    "velocity": 33
  },
  {
    "note": 88,
    "time": 62202,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 62202,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 62208,
    "velocity": 34
  },
  {
    "note": 74,
    "time": 62208,
    "velocity": 36
  },
  {
    "note": 60,
    "time": 62260,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 62260,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 62266,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 62266,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 62272,
    "velocity": 32
  },
  {
    "note": 72,
    "time": 62272,
    "velocity": 30
  },
  {
    "note": 84,
    "time": 62330,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 62330,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 62336,
    "velocity": 33
  },
  {
    "note": 70,
    "time": 62336,
    "velocity": 31
  },
  {
    "note": 82,
    "time": 62394,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 62394,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 62400,
    "velocity": 37
  },
  {
    "note": 69,
    "time": 62400,
    "velocity": 36
  },
  {
    "note": 81,
    "time": 62458,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 62458,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 62464,
    "velocity": 31
  },
  {
    "note": 67,
    "time": 62464,
    "velocity": 30
  },
  {
    "note": 79,
    "time": 62522,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 62522,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 62528,
    "velocity": 31
  },
  {
    "note": 65,
    "time": 62528,
    "velocity": 30
  },
  {
    "note": 77,
    "time": 62586,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 62586,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 62592,
    "velocity": 32
  },
  {
    "note": 64,
    "time": 62592,
    "velocity": 34
  },
  {
    "note": 76,
    "time": 62650,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 62650,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 62656,
    "velocity": 49
  },
  {
    "note": 77,
    "time": 62656,
    "velocity": 46
  },
  {
    "note": 62,
    "time": 62656,
    "velocity": 32
  },
  {
    "note": 74,
    "time": 62656,
    "velocity": 32
  },
  {
    "note": 89,
    "time": 62714,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 62714,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 62720,
    "velocity": 34
  },
  {
    "note": 76,
    "time": 62720,
    "velocity": 33
  },
  {
    "note": 62,
    "time": 62772,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 62772,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 62778,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 62778,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 62784,
    "velocity": 32
  },
  {
    "note": 74,
    "time": 62784,
    "velocity": 33
  },
  {
    "note": 86,
    "time": 62842,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 62842,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 62848,
    "velocity": 31
  },
  {
    "note": 72,
    "time": 62848,
    "velocity": 30
  },
  {
    "note": 84,
    "time": 62906,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 62906,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 62912,
    "velocity": 33
  },
  {
    "note": 70,
    "time": 62912,
    "velocity": 34
  },
  {
    "note": 82,
    "time": 62970,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 62970,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 62976,
    "velocity": 33
  },
  {
    "note": 69,
    "time": 62976,
    "velocity": 33
  },
  {
    "note": 81,
    "time": 63034,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 63034,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 63040,
    "velocity": 33
  },
  {
    "note": 67,
    "time": 63040,
    "velocity": 34
  },
  {
    "note": 79,
    "time": 63098,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 63098,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 63104,
    "velocity": 31
  },
  {
    "note": 65,
    "time": 63104,
    "velocity": 33
  },
  {
    "note": 77,
    "time": 63162,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 63162,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 63168,
    "velocity": 46
  },
  {
    "note": 79,
    "time": 63168,
    "velocity": 48
  },
  {
    "note": 64,
    "time": 63168,
    "velocity": 34
  },
  {
    "note": 76,
    "time": 63168,
    "velocity": 35
  },
  {
    "note": 91,
    "time": 63226,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 63226,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 63232,
    "velocity": 35
  },
  {
    "note": 77,
    "time": 63232,
    "velocity": 33
  },
  {
    "note": 64,
    "time": 63284,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 63284,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 63290,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 63290,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 63296,
    "velocity": 33
  },
  {
    "note": 76,
    "time": 63296,
    "velocity": 32
  },
  {
    "note": 88,
    "time": 63354,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 63354,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 63360,
    "velocity": 34
  },
  {
    "note": 74,
    "time": 63360,
    "velocity": 32
  },
  {
    "note": 86,
    "time": 63392,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 63392,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 63424,
    "velocity": 35
  },
  {
    "note": 72,
    "time": 63424,
    "velocity": 35
  },
  {
    "note": 84,
    "time": 63456,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 63456,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 63488,
    "velocity": 30
  },
  {
    "note": 70,
    "time": 63488,
    "velocity": 31
  },
  {
    "note": 82,
    "time": 63520,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 63520,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 63552,
    "velocity": 32
  },
  {
    "note": 69,
    "time": 63552,
    "velocity": 33
  },
  {
    "note": 81,
    "time": 63584,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 63584,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 63616,
    "velocity": 30
  },
  {
    "note": 67,
    "time": 63616,
    "velocity": 31
  },
  {
    "note": 79,
    "time": 63648,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 63648,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 63680,
    "velocity": 46
  },
  {
    "note": 93,
    "time": 63680,
    "velocity": 48
  },
  {
    "note": 65,
    "time": 63680,
    "velocity": 45
  },
  {
    "note": 77,
    "time": 63680,
    "velocity": 43
  },
  {
    "note": 81,
    "time": 63712,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 63712,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 63743,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 63743,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 63744,
    "velocity": 32
  },
  {
    "note": 89,
    "time": 63744,
    "velocity": 31
  },
  {
    "note": 77,
    "time": 63802,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 63802,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 63808,
    "velocity": 32
  },
  {
    "note": 76,
    "time": 63808,
    "velocity": 34
  },
  {
    "note": 88,
    "time": 63866,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 63871,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 63872,
    "velocity": 36
  },
  {
    "note": 89,
    "time": 63872,
    "velocity": 37
  },
  {
    "note": 77,
    "time": 63930,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 63930,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 63936,
    "velocity": 32
  },
  {
    "note": 72,
    "time": 63936,
    "velocity": 35
  },
  {
    "note": 84,
    "time": 63968,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 63999,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 64000,
    "velocity": 36
  },
  {
    "note": 89,
    "time": 64000,
    "velocity": 38
  },
  {
    "note": 77,
    "time": 64058,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 64058,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64064,
    "velocity": 33
  },
  {
    "note": 88,
    "time": 64064,
    "velocity": 35
  },
  {
    "note": 76,
    "time": 64064,
    "velocity": 37
  },
  {
    "note": 76,
    "time": 64122,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 64122,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64127,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 64128,
    "velocity": 37
  },
  {
    "note": 89,
    "time": 64128,
    "velocity": 37
  },
  {
    "note": 77,
    "time": 64186,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 64186,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 64192,
    "velocity": 42
  },
  {
    "note": 93,
    "time": 64192,
    "velocity": 40
  },
  {
    "note": 65,
    "time": 64192,
    "velocity": 39
  },
  {
    "note": 77,
    "time": 64192,
    "velocity": 41
  },
  {
    "note": 81,
    "time": 64224,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 64224,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 64255,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 64255,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 64256,
    "velocity": 32
  },
  {
    "note": 89,
    "time": 64256,
    "velocity": 32
  },
  {
    "note": 77,
    "time": 64314,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 64314,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 64320,
    "velocity": 33
  },
  {
    "note": 76,
    "time": 64320,
    "velocity": 34
  },
  {
    "note": 88,
    "time": 64378,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64383,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 64384,
    "velocity": 37
  },
  {
    "note": 89,
    "time": 64384,
    "velocity": 36
  },
  {
    "note": 77,
    "time": 64442,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 64442,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 64448,
    "velocity": 33
  },
  {
    "note": 72,
    "time": 64448,
    "velocity": 35
  },
  {
    "note": 84,
    "time": 64480,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 64511,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 64512,
    "velocity": 36
  },
  {
    "note": 89,
    "time": 64512,
    "velocity": 40
  },
  {
    "note": 77,
    "time": 64570,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 64570,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64576,
    "velocity": 34
  },
  {
    "note": 88,
    "time": 64576,
    "velocity": 32
  },
  {
    "note": 76,
    "time": 64576,
    "velocity": 38
  },
  {
    "note": 76,
    "time": 64634,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 64634,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64639,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 64640,
    "velocity": 37
  },
  {
    "note": 89,
    "time": 64640,
    "velocity": 36
  },
  {
    "note": 77,
    "time": 64698,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 64698,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 64704,
    "velocity": 39
  },
  {
    "note": 91,
    "time": 64704,
    "velocity": 42
  },
  {
    "note": 64,
    "time": 64704,
    "velocity": 38
  },
  {
    "note": 76,
    "time": 64704,
    "velocity": 39
  },
  {
    "note": 79,
    "time": 64736,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 64736,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 64767,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64767,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64768,
    "velocity": 33
  },
  {
    "note": 88,
    "time": 64768,
    "velocity": 32
  },
  {
    "note": 76,
    "time": 64826,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 64826,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 64832,
    "velocity": 32
  },
  {
    "note": 74,
    "time": 64832,
    "velocity": 32
  },
  {
    "note": 86,
    "time": 64890,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 64895,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 64896,
    "velocity": 36
  },
  {
    "note": 88,
    "time": 64896,
    "velocity": 36
  },
  {
    "note": 76,
    "time": 64954,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 64954,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 64960,
    "velocity": 32
  },
  {
    "note": 72,
    "time": 64960,
    "velocity": 36
  },
  {
    "note": 84,
    "time": 64992,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 65023,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65024,
    "velocity": 37
  },
  {
    "note": 88,
    "time": 65024,
    "velocity": 40
  },
  {
    "note": 76,
    "time": 65082,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 65082,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 65088,
    "velocity": 32
  },
  {
    "note": 74,
    "time": 65088,
    "velocity": 38
  },
  {
    "note": 86,
    "time": 65146,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 65151,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65152,
    "velocity": 35
  },
  {
    "note": 88,
    "time": 65152,
    "velocity": 34
  },
  {
    "note": 76,
    "time": 65210,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 65210,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 65216,
    "velocity": 42
  },
  {
    "note": 91,
    "time": 65216,
    "velocity": 40
  },
  {
    "note": 64,
    "time": 65216,
    "velocity": 41
  },
  {
    "note": 76,
    "time": 65216,
    "velocity": 42
  },
  {
    "note": 79,
    "time": 65248,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 65248,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 65279,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65279,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65280,
    "velocity": 31
  },
  {
    "note": 88,
    "time": 65280,
    "velocity": 30
  },
  {
    "note": 76,
    "time": 65338,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 65338,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 65344,
    "velocity": 32
  },
  {
    "note": 74,
    "time": 65344,
    "velocity": 32
  },
  {
    "note": 86,
    "time": 65402,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 65407,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65408,
    "velocity": 35
  },
  {
    "note": 88,
    "time": 65408,
    "velocity": 35
  },
  {
    "note": 76,
    "time": 65466,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 65466,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 65472,
    "velocity": 34
  },
  {
    "note": 72,
    "time": 65472,
    "velocity": 35
  },
  {
    "note": 84,
    "time": 65504,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 65535,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65536,
    "velocity": 39
  },
  {
    "note": 88,
    "time": 65536,
    "velocity": 40
  },
  {
    "note": 76,
    "time": 65594,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 65594,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 65600,
    "velocity": 35
  },
  {
    "note": 74,
    "time": 65600,
    "velocity": 37
  },
  {
    "note": 86,
    "time": 65658,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 65663,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65664,
    "velocity": 36
  },
  {
    "note": 88,
    "time": 65664,
    "velocity": 35
  },
  {
    "note": 76,
    "time": 65722,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 65722,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 65728,
    "velocity": 21
  },
  {
    "note": 93,
    "time": 65728,
    "velocity": 23
  },
  {
    "note": 65,
    "time": 65728,
    "velocity": 29
  },
  {
    "note": 77,
    "time": 65728,
    "velocity": 30
  },
  {
    "note": 81,
    "time": 65786,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 65786,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 65786,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 65786,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 65792,
    "velocity": 21
  },
  {
    "note": 77,
    "time": 65792,
    "velocity": 23
  },
  {
    "note": 89,
    "time": 65850,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 65850,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 65856,
    "velocity": 23
  },
  {
    "note": 76,
    "time": 65856,
    "velocity": 21
  },
  {
    "note": 88,
    "time": 65914,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 65914,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 65920,
    "velocity": 24
  },
  {
    "note": 77,
    "time": 65920,
    "velocity": 24
  },
  {
    "note": 89,
    "time": 65978,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 65978,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 65984,
    "velocity": 24
  },
  {
    "note": 72,
    "time": 65984,
    "velocity": 23
  },
  {
    "note": 84,
    "time": 66042,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 66042,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 66048,
    "velocity": 25
  },
  {
    "note": 77,
    "time": 66048,
    "velocity": 27
  },
  {
    "note": 89,
    "time": 66106,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 66106,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 66112,
    "velocity": 22
  },
  {
    "note": 76,
    "time": 66112,
    "velocity": 22
  },
  {
    "note": 88,
    "time": 66170,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 66170,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 66176,
    "velocity": 25
  },
  {
    "note": 77,
    "time": 66176,
    "velocity": 26
  },
  {
    "note": 89,
    "time": 66234,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 66234,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 66240,
    "velocity": 30
  },
  {
    "note": 93,
    "time": 66240,
    "velocity": 28
  },
  {
    "note": 65,
    "time": 66240,
    "velocity": 27
  },
  {
    "note": 77,
    "time": 66240,
    "velocity": 28
  },
  {
    "note": 81,
    "time": 66298,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 66298,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 66298,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 66298,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 66304,
    "velocity": 21
  },
  {
    "note": 77,
    "time": 66304,
    "velocity": 23
  },
  {
    "note": 89,
    "time": 66362,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 66362,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 66368,
    "velocity": 22
  },
  {
    "note": 76,
    "time": 66368,
    "velocity": 22
  },
  {
    "note": 88,
    "time": 66426,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 66426,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 66432,
    "velocity": 26
  },
  {
    "note": 77,
    "time": 66432,
    "velocity": 24
  },
  {
    "note": 89,
    "time": 66490,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 66490,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 66496,
    "velocity": 24
  },
  {
    "note": 72,
    "time": 66496,
    "velocity": 23
  },
  {
    "note": 84,
    "time": 66554,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 66554,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 66560,
    "velocity": 24
  },
  {
    "note": 77,
    "time": 66560,
    "velocity": 26
  },
  {
    "note": 89,
    "time": 66618,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 66618,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 66624,
    "velocity": 22
  },
  {
    "note": 76,
    "time": 66624,
    "velocity": 25
  },
  {
    "note": 88,
    "time": 66682,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 66682,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 66688,
    "velocity": 24
  },
  {
    "note": 77,
    "time": 66688,
    "velocity": 24
  },
  {
    "note": 89,
    "time": 66746,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 66746,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 66752,
    "velocity": 26
  },
  {
    "note": 91,
    "time": 66752,
    "velocity": 27
  },
  {
    "note": 64,
    "time": 66752,
    "velocity": 26
  },
  {
    "note": 76,
    "time": 66752,
    "velocity": 26
  },
  {
    "note": 79,
    "time": 66810,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 66810,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 66810,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 66810,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 66816,
    "velocity": 22
  },
  {
    "note": 76,
    "time": 66816,
    "velocity": 24
  },
  {
    "note": 88,
    "time": 66874,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 66874,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 66880,
    "velocity": 24
  },
  {
    "note": 74,
    "time": 66880,
    "velocity": 20
  },
  {
    "note": 86,
    "time": 66938,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 66938,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 66944,
    "velocity": 27
  },
  {
    "note": 76,
    "time": 66944,
    "velocity": 27
  },
  {
    "note": 88,
    "time": 67002,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67002,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 67008,
    "velocity": 26
  },
  {
    "note": 72,
    "time": 67008,
    "velocity": 23
  },
  {
    "note": 84,
    "time": 67066,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 67066,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 67072,
    "velocity": 24
  },
  {
    "note": 76,
    "time": 67072,
    "velocity": 26
  },
  {
    "note": 88,
    "time": 67130,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67130,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 67136,
    "velocity": 22
  },
  {
    "note": 74,
    "time": 67136,
    "velocity": 24
  },
  {
    "note": 86,
    "time": 67194,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 67194,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 67200,
    "velocity": 26
  },
  {
    "note": 76,
    "time": 67200,
    "velocity": 26
  },
  {
    "note": 88,
    "time": 67258,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67258,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 67264,
    "velocity": 30
  },
  {
    "note": 91,
    "time": 67264,
    "velocity": 30
  },
  {
    "note": 64,
    "time": 67264,
    "velocity": 27
  },
  {
    "note": 76,
    "time": 67264,
    "velocity": 28
  },
  {
    "note": 79,
    "time": 67322,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 67322,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 67322,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67322,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 67328,
    "velocity": 23
  },
  {
    "note": 76,
    "time": 67328,
    "velocity": 23
  },
  {
    "note": 88,
    "time": 67386,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67386,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 67392,
    "velocity": 22
  },
  {
    "note": 74,
    "time": 67392,
    "velocity": 24
  },
  {
    "note": 86,
    "time": 67450,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 67450,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 67456,
    "velocity": 27
  },
  {
    "note": 76,
    "time": 67456,
    "velocity": 27
  },
  {
    "note": 88,
    "time": 67514,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67514,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 67520,
    "velocity": 24
  },
  {
    "note": 72,
    "time": 67520,
    "velocity": 22
  },
  {
    "note": 84,
    "time": 67578,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 67578,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 67584,
    "velocity": 27
  },
  {
    "note": 76,
    "time": 67584,
    "velocity": 27
  },
  {
    "note": 88,
    "time": 67642,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67642,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 67648,
    "velocity": 23
  },
  {
    "note": 74,
    "time": 67648,
    "velocity": 22
  },
  {
    "note": 86,
    "time": 67706,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 67706,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 67712,
    "velocity": 26
  },
  {
    "note": 76,
    "time": 67712,
    "velocity": 24
  },
  {
    "note": 88,
    "time": 67770,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 67770,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 67776,
    "velocity": 28
  },
  {
    "note": 89,
    "time": 67776,
    "velocity": 30
  },
  {
    "note": 62,
    "time": 67776,
    "velocity": 26
  },
  {
    "note": 74,
    "time": 67776,
    "velocity": 26
  },
  {
    "note": 77,
    "time": 67834,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 67834,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 67834,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 67834,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 67840,
    "velocity": 32
  },
  {
    "note": 79,
    "time": 67840,
    "velocity": 35
  },
  {
    "note": 91,
    "time": 67898,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 67898,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 67904,
    "velocity": 37
  },
  {
    "note": 77,
    "time": 67904,
    "velocity": 38
  },
  {
    "note": 89,
    "time": 67962,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 67962,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 67968,
    "velocity": 46
  },
  {
    "note": 76,
    "time": 67968,
    "velocity": 44
  },
  {
    "note": 88,
    "time": 68026,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 68026,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 68032,
    "velocity": 47
  },
  {
    "note": 74,
    "time": 68032,
    "velocity": 47
  },
  {
    "note": 86,
    "time": 68090,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 68090,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 68096,
    "velocity": 44
  },
  {
    "note": 72,
    "time": 68096,
    "velocity": 46
  },
  {
    "note": 84,
    "time": 68154,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 68154,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 68160,
    "velocity": 45
  },
  {
    "note": 71,
    "time": 68160,
    "velocity": 45
  },
  {
    "note": 83,
    "time": 68218,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 68218,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 68224,
    "velocity": 42
  },
  {
    "note": 69,
    "time": 68224,
    "velocity": 45
  },
  {
    "note": 81,
    "time": 68282,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 68282,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 68288,
    "velocity": 54
  },
  {
    "note": 71,
    "time": 68288,
    "velocity": 53
  },
  {
    "note": 83,
    "time": 68346,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 68346,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 68352,
    "velocity": 57
  },
  {
    "note": 79,
    "time": 68352,
    "velocity": 56
  },
  {
    "note": 67,
    "time": 68410,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 68410,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 68416,
    "velocity": 39
  },
  {
    "note": 71,
    "time": 68474,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 68480,
    "velocity": 58
  },
  {
    "note": 86,
    "time": 68480,
    "velocity": 61
  },
  {
    "note": 74,
    "time": 68538,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 68538,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 68544,
    "velocity": 43
  },
  {
    "note": 77,
    "time": 68602,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 68608,
    "velocity": 60
  },
  {
    "note": 93,
    "time": 68608,
    "velocity": 59
  },
  {
    "note": 81,
    "time": 68666,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 68666,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 68672,
    "velocity": 44
  },
  {
    "note": 89,
    "time": 68730,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 68736,
    "velocity": 45
  },
  {
    "note": 86,
    "time": 68736,
    "velocity": 44
  },
  {
    "note": 74,
    "time": 68794,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 68794,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 68800,
    "velocity": 45
  },
  {
    "note": 83,
    "time": 68858,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 68864,
    "velocity": 43
  },
  {
    "note": 79,
    "time": 68864,
    "velocity": 44
  },
  {
    "note": 67,
    "time": 68922,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 68922,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 68928,
    "velocity": 35
  },
  {
    "note": 71,
    "time": 68986,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 68992,
    "velocity": 58
  },
  {
    "note": 86,
    "time": 68992,
    "velocity": 58
  },
  {
    "note": 74,
    "time": 69050,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 69050,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 69056,
    "velocity": 41
  },
  {
    "note": 77,
    "time": 69114,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 69120,
    "velocity": 60
  },
  {
    "note": 93,
    "time": 69120,
    "velocity": 58
  },
  {
    "note": 81,
    "time": 69178,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 69178,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 69184,
    "velocity": 45
  },
  {
    "note": 89,
    "time": 69242,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 69248,
    "velocity": 41
  },
  {
    "note": 86,
    "time": 69248,
    "velocity": 42
  },
  {
    "note": 74,
    "time": 69306,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 69306,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 69312,
    "velocity": 46
  },
  {
    "note": 82,
    "time": 69370,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 69376,
    "velocity": 43
  },
  {
    "note": 79,
    "time": 69376,
    "velocity": 42
  },
  {
    "note": 67,
    "time": 69434,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 69434,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 69440,
    "velocity": 35
  },
  {
    "note": 70,
    "time": 69498,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 69504,
    "velocity": 60
  },
  {
    "note": 84,
    "time": 69504,
    "velocity": 60
  },
  {
    "note": 72,
    "time": 69562,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 69562,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 69568,
    "velocity": 42
  },
  {
    "note": 76,
    "time": 69626,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 69632,
    "velocity": 59
  },
  {
    "note": 91,
    "time": 69632,
    "velocity": 62
  },
  {
    "note": 79,
    "time": 69690,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 69690,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 69696,
    "velocity": 47
  },
  {
    "note": 88,
    "time": 69754,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 69760,
    "velocity": 44
  },
  {
    "note": 84,
    "time": 69760,
    "velocity": 43
  },
  {
    "note": 72,
    "time": 69818,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 69818,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 69824,
    "velocity": 49
  },
  {
    "note": 82,
    "time": 69882,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 69888,
    "velocity": 42
  },
  {
    "note": 79,
    "time": 69888,
    "velocity": 44
  },
  {
    "note": 67,
    "time": 69946,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 69946,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 69952,
    "velocity": 35
  },
  {
    "note": 70,
    "time": 70010,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 70016,
    "velocity": 58
  },
  {
    "note": 84,
    "time": 70016,
    "velocity": 61
  },
  {
    "note": 72,
    "time": 70074,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 70074,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 70080,
    "velocity": 44
  },
  {
    "note": 76,
    "time": 70138,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 70144,
    "velocity": 61
  },
  {
    "note": 91,
    "time": 70144,
    "velocity": 60
  },
  {
    "note": 79,
    "time": 70202,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 70202,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 70208,
    "velocity": 45
  },
  {
    "note": 88,
    "time": 70266,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 70272,
    "velocity": 44
  },
  {
    "note": 84,
    "time": 70272,
    "velocity": 40
  },
  {
    "note": 72,
    "time": 70330,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 70330,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 70336,
    "velocity": 44
  },
  {
    "note": 81,
    "time": 70394,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 70400,
    "velocity": 42
  },
  {
    "note": 65,
    "time": 70400,
    "velocity": 45
  },
  {
    "note": 77,
    "time": 70458,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 70458,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 70464,
    "velocity": 54
  },
  {
    "note": 69,
    "time": 70464,
    "velocity": 55
  },
  {
    "note": 81,
    "time": 70522,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 70522,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 70528,
    "velocity": 54
  },
  {
    "note": 84,
    "time": 70528,
    "velocity": 54
  },
  {
    "note": 72,
    "time": 70586,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 70586,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 70592,
    "velocity": 40
  },
  {
    "note": 74,
    "time": 70650,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 70656,
    "velocity": 51
  },
  {
    "note": 89,
    "time": 70656,
    "velocity": 44
  },
  {
    "note": 77,
    "time": 70714,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 70714,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 70720,
    "velocity": 46
  },
  {
    "note": 86,
    "time": 70720,
    "velocity": 44
  },
  {
    "note": 74,
    "time": 70778,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 70778,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 70784,
    "velocity": 59
  },
  {
    "note": 82,
    "time": 70784,
    "velocity": 60
  },
  {
    "note": 70,
    "time": 70842,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 70842,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 70848,
    "velocity": 56
  },
  {
    "note": 81,
    "time": 70848,
    "velocity": 54
  },
  {
    "note": 69,
    "time": 70906,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 70906,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 70912,
    "velocity": 49
  },
  {
    "note": 65,
    "time": 70912,
    "velocity": 49
  },
  {
    "note": 77,
    "time": 70970,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 70970,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 70976,
    "velocity": 57
  },
  {
    "note": 69,
    "time": 70976,
    "velocity": 58
  },
  {
    "note": 81,
    "time": 71034,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 71034,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 71040,
    "velocity": 60
  },
  {
    "note": 84,
    "time": 71040,
    "velocity": 61
  },
  {
    "note": 72,
    "time": 71098,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 71098,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 71104,
    "velocity": 45
  },
  {
    "note": 74,
    "time": 71162,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 71168,
    "velocity": 60
  },
  {
    "note": 89,
    "time": 71168,
    "velocity": 52
  },
  {
    "note": 77,
    "time": 71226,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 71226,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 71232,
    "velocity": 53
  },
  {
    "note": 86,
    "time": 71232,
    "velocity": 49
  },
  {
    "note": 74,
    "time": 71290,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 71290,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 71296,
    "velocity": 69
  },
  {
    "note": 82,
    "time": 71296,
    "velocity": 69
  },
  {
    "note": 70,
    "time": 71354,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 71354,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 71360,
    "velocity": 56
  },
  {
    "note": 79,
    "time": 71360,
    "velocity": 55
  },
  {
    "note": 67,
    "time": 71418,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 71418,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 71424,
    "velocity": 53
  },
  {
    "note": 64,
    "time": 71424,
    "velocity": 53
  },
  {
    "note": 76,
    "time": 71482,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 71482,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 71488,
    "velocity": 64
  },
  {
    "note": 67,
    "time": 71488,
    "velocity": 62
  },
  {
    "note": 79,
    "time": 71546,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 71546,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 71552,
    "velocity": 66
  },
  {
    "note": 82,
    "time": 71552,
    "velocity": 66
  },
  {
    "note": 70,
    "time": 71610,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 71610,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 71616,
    "velocity": 50
  },
  {
    "note": 73,
    "time": 71674,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 71680,
    "velocity": 67
  },
  {
    "note": 88,
    "time": 71680,
    "velocity": 54
  },
  {
    "note": 76,
    "time": 71738,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 71738,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 71744,
    "velocity": 59
  },
  {
    "note": 85,
    "time": 71744,
    "velocity": 56
  },
  {
    "note": 73,
    "time": 71802,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 71802,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 71808,
    "velocity": 76
  },
  {
    "note": 82,
    "time": 71866,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 71872,
    "velocity": 64
  },
  {
    "note": 79,
    "time": 71930,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 71936,
    "velocity": 58
  },
  {
    "note": 64,
    "time": 71936,
    "velocity": 55
  },
  {
    "note": 76,
    "time": 71994,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 71994,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 72000,
    "velocity": 68
  },
  {
    "note": 67,
    "time": 72000,
    "velocity": 67
  },
  {
    "note": 79,
    "time": 72058,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 72058,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 72064,
    "velocity": 68
  },
  {
    "note": 82,
    "time": 72064,
    "velocity": 70
  },
  {
    "note": 70,
    "time": 72122,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 72122,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 72128,
    "velocity": 54
  },
  {
    "note": 73,
    "time": 72186,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 72192,
    "velocity": 66
  },
  {
    "note": 88,
    "time": 72192,
    "velocity": 55
  },
  {
    "note": 76,
    "time": 72250,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 72250,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 72256,
    "velocity": 58
  },
  {
    "note": 85,
    "time": 72256,
    "velocity": 56
  },
  {
    "note": 73,
    "time": 72314,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 72314,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 72320,
    "velocity": 77
  },
  {
    "note": 82,
    "time": 72320,
    "velocity": 75
  },
  {
    "note": 70,
    "time": 72378,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 72378,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 72384,
    "velocity": 64
  },
  {
    "note": 81,
    "time": 72384,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 72384,
    "velocity": 74
  },
  {
    "note": 69,
    "time": 72442,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 72442,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72448,
    "velocity": 78
  },
  {
    "note": 69,
    "time": 72448,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 72500,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72506,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 72506,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 72512,
    "velocity": 76
  },
  {
    "note": 85,
    "time": 72512,
    "velocity": 72
  },
  {
    "note": 67,
    "time": 72512,
    "velocity": 71
  },
  {
    "note": 61,
    "time": 72512,
    "velocity": 86
  },
  {
    "note": 91,
    "time": 72570,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 72570,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72576,
    "velocity": 85
  },
  {
    "note": 69,
    "time": 72576,
    "velocity": 83
  },
  {
    "note": 85,
    "time": 72628,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 72628,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72634,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 72634,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 72640,
    "velocity": 72
  },
  {
    "note": 86,
    "time": 72640,
    "velocity": 85
  },
  {
    "note": 65,
    "time": 72640,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 72640,
    "velocity": 88
  },
  {
    "note": 89,
    "time": 72698,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 72698,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72704,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 72704,
    "velocity": 87
  },
  {
    "note": 86,
    "time": 72756,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 72756,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72762,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 72762,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 72768,
    "velocity": 71
  },
  {
    "note": 79,
    "time": 72768,
    "velocity": 65
  },
  {
    "note": 64,
    "time": 72768,
    "velocity": 69
  },
  {
    "note": 55,
    "time": 72768,
    "velocity": 67
  },
  {
    "note": 88,
    "time": 72826,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 72826,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72832,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 72832,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 72884,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 72884,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72890,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 72890,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 72896,
    "velocity": 67
  },
  {
    "note": 77,
    "time": 72896,
    "velocity": 73
  },
  {
    "note": 62,
    "time": 72896,
    "velocity": 68
  },
  {
    "note": 53,
    "time": 72896,
    "velocity": 73
  },
  {
    "note": 86,
    "time": 72954,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 72954,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 72960,
    "velocity": 90
  },
  {
    "note": 69,
    "time": 72960,
    "velocity": 92
  },
  {
    "note": 77,
    "time": 73012,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 73012,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73018,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 73018,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 73024,
    "velocity": 67
  },
  {
    "note": 81,
    "time": 73024,
    "velocity": 86
  },
  {
    "note": 61,
    "time": 73024,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 73024,
    "velocity": 87
  },
  {
    "note": 85,
    "time": 73082,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 73082,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73088,
    "velocity": 92
  },
  {
    "note": 69,
    "time": 73088,
    "velocity": 94
  },
  {
    "note": 81,
    "time": 73140,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 73140,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73146,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 73146,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 73152,
    "velocity": 71
  },
  {
    "note": 83,
    "time": 73152,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 73152,
    "velocity": 71
  },
  {
    "note": 59,
    "time": 73152,
    "velocity": 90
  },
  {
    "note": 86,
    "time": 73210,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 73210,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73216,
    "velocity": 92
  },
  {
    "note": 69,
    "time": 73216,
    "velocity": 91
  },
  {
    "note": 83,
    "time": 73268,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 73268,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73274,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 73274,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 73280,
    "velocity": 71
  },
  {
    "note": 85,
    "time": 73280,
    "velocity": 85
  },
  {
    "note": 64,
    "time": 73280,
    "velocity": 70
  },
  {
    "note": 61,
    "time": 73280,
    "velocity": 87
  },
  {
    "note": 88,
    "time": 73338,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 73338,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73344,
    "velocity": 88
  },
  {
    "note": 69,
    "time": 73344,
    "velocity": 91
  },
  {
    "note": 85,
    "time": 73396,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 73396,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73402,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 73402,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 73408,
    "velocity": 74
  },
  {
    "note": 86,
    "time": 73408,
    "velocity": 88
  },
  {
    "note": 65,
    "time": 73408,
    "velocity": 76
  },
  {
    "note": 62,
    "time": 73408,
    "velocity": 89
  },
  {
    "note": 89,
    "time": 73466,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 73466,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73472,
    "velocity": 88
  },
  {
    "note": 69,
    "time": 73472,
    "velocity": 87
  },
  {
    "note": 86,
    "time": 73524,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 73524,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73530,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 73530,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 73536,
    "velocity": 61
  },
  {
    "note": 85,
    "time": 73536,
    "velocity": 78
  },
  {
    "note": 61,
    "time": 73536,
    "velocity": 78
  },
  {
    "note": 81,
    "time": 73594,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73600,
    "velocity": 97
  },
  {
    "note": 69,
    "time": 73600,
    "velocity": 69
  },
  {
    "note": 85,
    "time": 73652,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 73652,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73658,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 73658,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 73664,
    "velocity": 69
  },
  {
    "note": 86,
    "time": 73664,
    "velocity": 85
  },
  {
    "note": 71,
    "time": 73664,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 73664,
    "velocity": 86
  },
  {
    "note": 83,
    "time": 73722,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 73722,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 73728,
    "velocity": 97
  },
  {
    "note": 93,
    "time": 73728,
    "velocity": 95
  },
  {
    "note": 69,
    "time": 73728,
    "velocity": 73
  },
  {
    "note": 86,
    "time": 73780,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 73780,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 73786,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73786,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 73786,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 73792,
    "velocity": 68
  },
  {
    "note": 88,
    "time": 73792,
    "velocity": 87
  },
  {
    "note": 73,
    "time": 73792,
    "velocity": 88
  },
  {
    "note": 64,
    "time": 73792,
    "velocity": 84
  },
  {
    "note": 85,
    "time": 73850,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 73850,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 73856,
    "velocity": 93
  },
  {
    "note": 93,
    "time": 73856,
    "velocity": 92
  },
  {
    "note": 71,
    "time": 73856,
    "velocity": 76
  },
  {
    "note": 88,
    "time": 73908,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 73908,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 73914,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 73914,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 73914,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 73920,
    "velocity": 76
  },
  {
    "note": 74,
    "time": 73920,
    "velocity": 89
  },
  {
    "note": 65,
    "time": 73920,
    "velocity": 105
  },
  {
    "note": 77,
    "time": 73920,
    "velocity": 105
  },
  {
    "note": 88,
    "time": 73978,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 73978,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 73984,
    "velocity": 92
  },
  {
    "note": 93,
    "time": 73984,
    "velocity": 92
  },
  {
    "note": 69,
    "time": 73984,
    "velocity": 74
  },
  {
    "note": 65,
    "time": 74036,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 74036,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74042,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 74042,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 74042,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 74048,
    "velocity": 74
  },
  {
    "note": 73,
    "time": 74048,
    "velocity": 97
  },
  {
    "note": 64,
    "time": 74048,
    "velocity": 87
  },
  {
    "note": 76,
    "time": 74048,
    "velocity": 89
  },
  {
    "note": 85,
    "time": 74106,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 74106,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74112,
    "velocity": 106
  },
  {
    "note": 93,
    "time": 74112,
    "velocity": 106
  },
  {
    "note": 69,
    "time": 74112,
    "velocity": 84
  },
  {
    "note": 64,
    "time": 74164,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 74164,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74170,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 74170,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 74170,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 74176,
    "velocity": 88
  },
  {
    "note": 89,
    "time": 74176,
    "velocity": 91
  },
  {
    "note": 74,
    "time": 74176,
    "velocity": 114
  },
  {
    "note": 77,
    "time": 74176,
    "velocity": 116
  },
  {
    "note": 81,
    "time": 74240,
    "velocity": 84
  },
  {
    "note": 69,
    "time": 74240,
    "velocity": 87
  },
  {
    "note": 86,
    "time": 74292,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 74292,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 74292,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 74292,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74298,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 74298,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 74304,
    "velocity": 88
  },
  {
    "note": 88,
    "time": 74304,
    "velocity": 90
  },
  {
    "note": 79,
    "time": 74304,
    "velocity": 88
  },
  {
    "note": 73,
    "time": 74304,
    "velocity": 94
  },
  {
    "note": 76,
    "time": 74304,
    "velocity": 96
  },
  {
    "note": 67,
    "time": 74304,
    "velocity": 89
  },
  {
    "note": 79,
    "time": 74362,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 74362,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74368,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 74368,
    "velocity": 100
  },
  {
    "note": 85,
    "time": 74420,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 74420,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 74420,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 74420,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74426,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 74426,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 74432,
    "velocity": 93
  },
  {
    "note": 86,
    "time": 74432,
    "velocity": 90
  },
  {
    "note": 70,
    "time": 74432,
    "velocity": 92
  },
  {
    "note": 74,
    "time": 74432,
    "velocity": 94
  },
  {
    "note": 77,
    "time": 74496,
    "velocity": 84
  },
  {
    "note": 65,
    "time": 74496,
    "velocity": 83
  },
  {
    "note": 82,
    "time": 74548,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 74548,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 74548,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 74548,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 74554,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 74554,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74560,
    "velocity": 84
  },
  {
    "note": 84,
    "time": 74560,
    "velocity": 82
  },
  {
    "note": 76,
    "time": 74560,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 74560,
    "velocity": 84
  },
  {
    "note": 72,
    "time": 74560,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 74560,
    "velocity": 86
  },
  {
    "note": 76,
    "time": 74618,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 74618,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 74624,
    "velocity": 95
  },
  {
    "note": 66,
    "time": 74624,
    "velocity": 93
  },
  {
    "note": 81,
    "time": 74676,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 74676,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 74676,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 74676,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 74682,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 74682,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 74688,
    "velocity": 109
  },
  {
    "note": 82,
    "time": 74688,
    "velocity": 109
  },
  {
    "note": 67,
    "time": 74688,
    "velocity": 83
  },
  {
    "note": 70,
    "time": 74688,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 74752,
    "velocity": 76
  },
  {
    "note": 62,
    "time": 74752,
    "velocity": 75
  },
  {
    "note": 79,
    "time": 74804,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 74804,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 74804,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 74804,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 74810,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 74810,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 74816,
    "velocity": 80
  },
  {
    "note": 81,
    "time": 74816,
    "velocity": 81
  },
  {
    "note": 72,
    "time": 74816,
    "velocity": 75
  },
  {
    "note": 66,
    "time": 74816,
    "velocity": 78
  },
  {
    "note": 69,
    "time": 74816,
    "velocity": 79
  },
  {
    "note": 60,
    "time": 74816,
    "velocity": 74
  },
  {
    "note": 72,
    "time": 74874,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 74874,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 74880,
    "velocity": 84
  },
  {
    "note": 62,
    "time": 74880,
    "velocity": 83
  },
  {
    "note": 78,
    "time": 74932,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 74932,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 74932,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 74932,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 74938,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 74938,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 74944,
    "velocity": 75
  },
  {
    "note": 70,
    "time": 74944,
    "velocity": 75
  },
  {
    "note": 67,
    "time": 74944,
    "velocity": 72
  },
  {
    "note": 58,
    "time": 74944,
    "velocity": 72
  },
  {
    "note": 70,
    "time": 75002,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 75002,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 75008,
    "velocity": 71
  },
  {
    "note": 60,
    "time": 75008,
    "velocity": 79
  },
  {
    "note": 79,
    "time": 75060,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 75060,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 75066,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 75066,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 75072,
    "velocity": 63
  },
  {
    "note": 58,
    "time": 75072,
    "velocity": 65
  },
  {
    "note": 67,
    "time": 75130,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 75130,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 75136,
    "velocity": 57
  },
  {
    "note": 57,
    "time": 75136,
    "velocity": 60
  },
  {
    "note": 65,
    "time": 75194,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 75194,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 75200,
    "velocity": 57
  },
  {
    "note": 55,
    "time": 75200,
    "velocity": 56
  },
  {
    "note": 64,
    "time": 75258,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 75258,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 75264,
    "velocity": 48
  },
  {
    "note": 53,
    "time": 75264,
    "velocity": 49
  },
  {
    "note": 62,
    "time": 75322,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 75322,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 75328,
    "velocity": 44
  },
  {
    "note": 52,
    "time": 75328,
    "velocity": 46
  },
  {
    "note": 61,
    "time": 75386,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 75386,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 75392,
    "velocity": 38
  },
  {
    "note": 50,
    "time": 75392,
    "velocity": 39
  },
  {
    "note": 59,
    "time": 75450,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 75450,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 75456,
    "velocity": 38
  },
  {
    "note": 49,
    "time": 75456,
    "velocity": 37
  },
  {
    "note": 57,
    "time": 75514,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 75514,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 75520,
    "velocity": 34
  },
  {
    "note": 45,
    "time": 75578,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 75584,
    "velocity": 42
  },
  {
    "note": 49,
    "time": 75642,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 75648,
    "velocity": 41
  },
  {
    "note": 52,
    "time": 75706,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 75712,
    "velocity": 43
  },
  {
    "note": 55,
    "time": 75770,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 75776,
    "velocity": 42
  },
  {
    "note": 58,
    "time": 75834,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 75840,
    "velocity": 35
  },
  {
    "note": 55,
    "time": 75898,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 75904,
    "velocity": 35
  },
  {
    "note": 52,
    "time": 75962,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 75968,
    "velocity": 36
  },
  {
    "note": 49,
    "time": 76026,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 76032,
    "velocity": 34
  },
  {
    "note": 45,
    "time": 76090,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 76096,
    "velocity": 40
  },
  {
    "note": 49,
    "time": 76154,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 76160,
    "velocity": 42
  },
  {
    "note": 52,
    "time": 76218,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 76224,
    "velocity": 42
  },
  {
    "note": 55,
    "time": 76282,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 76288,
    "velocity": 43
  },
  {
    "note": 58,
    "time": 76346,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 76352,
    "velocity": 36
  },
  {
    "note": 55,
    "time": 76410,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 76416,
    "velocity": 35
  },
  {
    "note": 52,
    "time": 76474,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 76480,
    "velocity": 38
  },
  {
    "note": 50,
    "time": 76538,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 76544,
    "velocity": 32
  },
  {
    "note": 45,
    "time": 76602,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 76608,
    "velocity": 41
  },
  {
    "note": 50,
    "time": 76666,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 76672,
    "velocity": 43
  },
  {
    "note": 53,
    "time": 76730,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 76736,
    "velocity": 44
  },
  {
    "note": 57,
    "time": 76794,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 76800,
    "velocity": 44
  },
  {
    "note": 62,
    "time": 76858,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 76864,
    "velocity": 31
  },
  {
    "note": 57,
    "time": 76922,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 76928,
    "velocity": 31
  },
  {
    "note": 53,
    "time": 76986,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 76992,
    "velocity": 37
  },
  {
    "note": 50,
    "time": 77050,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 77056,
    "velocity": 32
  },
  {
    "note": 45,
    "time": 77114,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 77120,
    "velocity": 42
  },
  {
    "note": 50,
    "time": 77178,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 77184,
    "velocity": 41
  },
  {
    "note": 53,
    "time": 77242,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 77248,
    "velocity": 43
  },
  {
    "note": 57,
    "time": 77306,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 77312,
    "velocity": 45
  },
  {
    "note": 62,
    "time": 77370,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 77376,
    "velocity": 32
  },
  {
    "note": 57,
    "time": 77434,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 77440,
    "velocity": 43
  },
  {
    "note": 53,
    "time": 77498,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 77504,
    "velocity": 48
  },
  {
    "note": 49,
    "time": 77504,
    "velocity": 44
  },
  {
    "note": 61,
    "time": 77562,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 77562,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 77568,
    "velocity": 43
  },
  {
    "note": 45,
    "time": 77568,
    "velocity": 41
  },
  {
    "note": 57,
    "time": 77626,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 77626,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 77632,
    "velocity": 52
  },
  {
    "note": 49,
    "time": 77632,
    "velocity": 51
  },
  {
    "note": 61,
    "time": 77690,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 77690,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 77696,
    "velocity": 52
  },
  {
    "note": 52,
    "time": 77696,
    "velocity": 53
  },
  {
    "note": 64,
    "time": 77754,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 77754,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 77760,
    "velocity": 56
  },
  {
    "note": 55,
    "time": 77760,
    "velocity": 54
  },
  {
    "note": 67,
    "time": 77818,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 77818,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 77824,
    "velocity": 53
  },
  {
    "note": 58,
    "time": 77824,
    "velocity": 53
  },
  {
    "note": 70,
    "time": 77882,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 77882,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 77888,
    "velocity": 45
  },
  {
    "note": 55,
    "time": 77888,
    "velocity": 45
  },
  {
    "note": 67,
    "time": 77946,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 77946,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 77952,
    "velocity": 41
  },
  {
    "note": 52,
    "time": 77952,
    "velocity": 41
  },
  {
    "note": 64,
    "time": 78010,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 78010,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 78016,
    "velocity": 46
  },
  {
    "note": 49,
    "time": 78016,
    "velocity": 46
  },
  {
    "note": 61,
    "time": 78074,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 78074,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 78080,
    "velocity": 40
  },
  {
    "note": 45,
    "time": 78080,
    "velocity": 44
  },
  {
    "note": 57,
    "time": 78138,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 78138,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 78144,
    "velocity": 54
  },
  {
    "note": 49,
    "time": 78144,
    "velocity": 53
  },
  {
    "note": 61,
    "time": 78202,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 78202,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 78208,
    "velocity": 52
  },
  {
    "note": 52,
    "time": 78208,
    "velocity": 50
  },
  {
    "note": 64,
    "time": 78266,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 78266,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 78272,
    "velocity": 57
  },
  {
    "note": 55,
    "time": 78272,
    "velocity": 53
  },
  {
    "note": 67,
    "time": 78330,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 78330,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 78336,
    "velocity": 54
  },
  {
    "note": 58,
    "time": 78336,
    "velocity": 51
  },
  {
    "note": 70,
    "time": 78394,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 78394,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 78400,
    "velocity": 46
  },
  {
    "note": 55,
    "time": 78400,
    "velocity": 44
  },
  {
    "note": 67,
    "time": 78458,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 78458,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 78464,
    "velocity": 44
  },
  {
    "note": 52,
    "time": 78464,
    "velocity": 42
  },
  {
    "note": 64,
    "time": 78522,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 78522,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 78528,
    "velocity": 48
  },
  {
    "note": 50,
    "time": 78528,
    "velocity": 46
  },
  {
    "note": 62,
    "time": 78586,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 78586,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 78592,
    "velocity": 42
  },
  {
    "note": 45,
    "time": 78592,
    "velocity": 39
  },
  {
    "note": 57,
    "time": 78650,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 78650,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 78656,
    "velocity": 54
  },
  {
    "note": 50,
    "time": 78656,
    "velocity": 55
  },
  {
    "note": 62,
    "time": 78714,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 78714,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 78720,
    "velocity": 50
  },
  {
    "note": 53,
    "time": 78720,
    "velocity": 53
  },
  {
    "note": 65,
    "time": 78778,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 78778,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 78784,
    "velocity": 55
  },
  {
    "note": 57,
    "time": 78784,
    "velocity": 55
  },
  {
    "note": 69,
    "time": 78842,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 78842,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 78848,
    "velocity": 54
  },
  {
    "note": 62,
    "time": 78848,
    "velocity": 57
  },
  {
    "note": 74,
    "time": 78906,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 78906,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 78912,
    "velocity": 44
  },
  {
    "note": 57,
    "time": 78912,
    "velocity": 42
  },
  {
    "note": 69,
    "time": 78970,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 78970,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 78976,
    "velocity": 42
  },
  {
    "note": 53,
    "time": 78976,
    "velocity": 43
  },
  {
    "note": 65,
    "time": 79034,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 79034,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 79040,
    "velocity": 44
  },
  {
    "note": 50,
    "time": 79040,
    "velocity": 45
  },
  {
    "note": 62,
    "time": 79098,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 79098,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 79104,
    "velocity": 40
  },
  {
    "note": 45,
    "time": 79104,
    "velocity": 38
  },
  {
    "note": 57,
    "time": 79162,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 79162,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 79168,
    "velocity": 54
  },
  {
    "note": 50,
    "time": 79168,
    "velocity": 51
  },
  {
    "note": 62,
    "time": 79226,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 79226,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 79232,
    "velocity": 51
  },
  {
    "note": 53,
    "time": 79232,
    "velocity": 53
  },
  {
    "note": 65,
    "time": 79290,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 79290,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 79296,
    "velocity": 57
  },
  {
    "note": 57,
    "time": 79296,
    "velocity": 57
  },
  {
    "note": 69,
    "time": 79354,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 79354,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 79360,
    "velocity": 56
  },
  {
    "note": 62,
    "time": 79360,
    "velocity": 55
  },
  {
    "note": 74,
    "time": 79418,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 79418,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 79424,
    "velocity": 43
  },
  {
    "note": 57,
    "time": 79424,
    "velocity": 42
  },
  {
    "note": 69,
    "time": 79482,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 79482,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 79488,
    "velocity": 40
  },
  {
    "note": 53,
    "time": 79488,
    "velocity": 43
  },
  {
    "note": 65,
    "time": 79546,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 79546,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 79552,
    "velocity": 45
  },
  {
    "note": 52,
    "time": 79610,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 79616,
    "velocity": 44
  },
  {
    "note": 49,
    "time": 79674,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 79680,
    "velocity": 50
  },
  {
    "note": 52,
    "time": 79738,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 79744,
    "velocity": 51
  },
  {
    "note": 55,
    "time": 79802,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 79808,
    "velocity": 55
  },
  {
    "note": 58,
    "time": 79866,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 79872,
    "velocity": 53
  },
  {
    "note": 61,
    "time": 79930,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 79936,
    "velocity": 43
  },
  {
    "note": 58,
    "time": 79994,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 80000,
    "velocity": 44
  },
  {
    "note": 55,
    "time": 80058,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 80064,
    "velocity": 45
  },
  {
    "note": 52,
    "time": 80122,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 80128,
    "velocity": 43
  },
  {
    "note": 49,
    "time": 80186,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 80192,
    "velocity": 50
  },
  {
    "note": 52,
    "time": 80250,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 80256,
    "velocity": 53
  },
  {
    "note": 55,
    "time": 80314,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 80320,
    "velocity": 55
  },
  {
    "note": 58,
    "time": 80378,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 80384,
    "velocity": 52
  },
  {
    "note": 61,
    "time": 80442,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 80448,
    "velocity": 42
  },
  {
    "note": 58,
    "time": 80506,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 80512,
    "velocity": 45
  },
  {
    "note": 55,
    "time": 80570,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 80576,
    "velocity": 48
  },
  {
    "note": 53,
    "time": 80634,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 80640,
    "velocity": 41
  },
  {
    "note": 50,
    "time": 80698,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 80704,
    "velocity": 51
  },
  {
    "note": 53,
    "time": 80762,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 80768,
    "velocity": 52
  },
  {
    "note": 57,
    "time": 80826,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 80832,
    "velocity": 60
  },
  {
    "note": 62,
    "time": 80890,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 80896,
    "velocity": 51
  },
  {
    "note": 65,
    "time": 80954,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 80960,
    "velocity": 45
  },
  {
    "note": 62,
    "time": 81018,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 81024,
    "velocity": 39
  },
  {
    "note": 57,
    "time": 81082,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 81088,
    "velocity": 44
  },
  {
    "note": 53,
    "time": 81146,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 81152,
    "velocity": 41
  },
  {
    "note": 50,
    "time": 81210,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 81216,
    "velocity": 51
  },
  {
    "note": 53,
    "time": 81274,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 81280,
    "velocity": 55
  },
  {
    "note": 57,
    "time": 81338,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 81344,
    "velocity": 56
  },
  {
    "note": 62,
    "time": 81402,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 81408,
    "velocity": 53
  },
  {
    "note": 65,
    "time": 81466,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 81472,
    "velocity": 45
  },
  {
    "note": 62,
    "time": 81530,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 81536,
    "velocity": 41
  },
  {
    "note": 57,
    "time": 81594,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 81600,
    "velocity": 58
  },
  {
    "note": 52,
    "time": 81600,
    "velocity": 57
  },
  {
    "note": 64,
    "time": 81658,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 81658,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 81664,
    "velocity": 57
  },
  {
    "note": 49,
    "time": 81664,
    "velocity": 56
  },
  {
    "note": 61,
    "time": 81722,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 81722,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 81728,
    "velocity": 68
  },
  {
    "note": 52,
    "time": 81728,
    "velocity": 67
  },
  {
    "note": 64,
    "time": 81786,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 81786,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 81792,
    "velocity": 70
  },
  {
    "note": 55,
    "time": 81792,
    "velocity": 67
  },
  {
    "note": 67,
    "time": 81850,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 81850,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 81856,
    "velocity": 74
  },
  {
    "note": 58,
    "time": 81856,
    "velocity": 71
  },
  {
    "note": 70,
    "time": 81914,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 81914,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 81920,
    "velocity": 69
  },
  {
    "note": 61,
    "time": 81920,
    "velocity": 69
  },
  {
    "note": 73,
    "time": 81978,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 81978,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 81984,
    "velocity": 58
  },
  {
    "note": 58,
    "time": 81984,
    "velocity": 58
  },
  {
    "note": 70,
    "time": 82042,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 82042,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 82048,
    "velocity": 59
  },
  {
    "note": 55,
    "time": 82048,
    "velocity": 57
  },
  {
    "note": 67,
    "time": 82106,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 82106,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 82112,
    "velocity": 60
  },
  {
    "note": 52,
    "time": 82112,
    "velocity": 59
  },
  {
    "note": 64,
    "time": 82170,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 82170,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 82176,
    "velocity": 57
  },
  {
    "note": 49,
    "time": 82176,
    "velocity": 54
  },
  {
    "note": 61,
    "time": 82234,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 82234,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 82240,
    "velocity": 66
  },
  {
    "note": 52,
    "time": 82240,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 82298,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 82298,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 82304,
    "velocity": 66
  },
  {
    "note": 55,
    "time": 82304,
    "velocity": 67
  },
  {
    "note": 67,
    "time": 82362,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 82362,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 82368,
    "velocity": 70
  },
  {
    "note": 58,
    "time": 82368,
    "velocity": 70
  },
  {
    "note": 70,
    "time": 82426,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 82426,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 82432,
    "velocity": 68
  },
  {
    "note": 61,
    "time": 82432,
    "velocity": 68
  },
  {
    "note": 73,
    "time": 82490,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 82490,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 82496,
    "velocity": 60
  },
  {
    "note": 58,
    "time": 82496,
    "velocity": 59
  },
  {
    "note": 70,
    "time": 82554,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 82554,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 82560,
    "velocity": 58
  },
  {
    "note": 55,
    "time": 82560,
    "velocity": 57
  },
  {
    "note": 67,
    "time": 82618,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 82618,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 82624,
    "velocity": 62
  },
  {
    "note": 53,
    "time": 82624,
    "velocity": 62
  },
  {
    "note": 65,
    "time": 82682,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 82682,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 82688,
    "velocity": 57
  },
  {
    "note": 50,
    "time": 82688,
    "velocity": 56
  },
  {
    "note": 62,
    "time": 82746,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 82746,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 82752,
    "velocity": 67
  },
  {
    "note": 53,
    "time": 82752,
    "velocity": 66
  },
  {
    "note": 65,
    "time": 82810,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 82810,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 82816,
    "velocity": 69
  },
  {
    "note": 57,
    "time": 82816,
    "velocity": 71
  },
  {
    "note": 69,
    "time": 82874,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 82874,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 82880,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 82880,
    "velocity": 76
  },
  {
    "note": 74,
    "time": 82938,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 82938,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 82944,
    "velocity": 69
  },
  {
    "note": 65,
    "time": 82944,
    "velocity": 70
  },
  {
    "note": 77,
    "time": 83002,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 83002,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 83008,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 83008,
    "velocity": 60
  },
  {
    "note": 74,
    "time": 83066,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 83066,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 83072,
    "velocity": 53
  },
  {
    "note": 57,
    "time": 83072,
    "velocity": 54
  },
  {
    "note": 69,
    "time": 83130,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 83130,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 83136,
    "velocity": 56
  },
  {
    "note": 53,
    "time": 83136,
    "velocity": 59
  },
  {
    "note": 65,
    "time": 83194,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 83194,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 83200,
    "velocity": 55
  },
  {
    "note": 50,
    "time": 83200,
    "velocity": 56
  },
  {
    "note": 62,
    "time": 83258,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 83258,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 83264,
    "velocity": 69
  },
  {
    "note": 53,
    "time": 83264,
    "velocity": 65
  },
  {
    "note": 65,
    "time": 83322,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 83322,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 83328,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 83328,
    "velocity": 68
  },
  {
    "note": 69,
    "time": 83386,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 83386,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 83392,
    "velocity": 73
  },
  {
    "note": 62,
    "time": 83392,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 83450,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 83450,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 83456,
    "velocity": 71
  },
  {
    "note": 65,
    "time": 83456,
    "velocity": 67
  },
  {
    "note": 77,
    "time": 83514,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 83514,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 83520,
    "velocity": 56
  },
  {
    "note": 62,
    "time": 83520,
    "velocity": 57
  },
  {
    "note": 74,
    "time": 83578,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 83578,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 83584,
    "velocity": 53
  },
  {
    "note": 57,
    "time": 83584,
    "velocity": 55
  },
  {
    "note": 69,
    "time": 83642,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 83642,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 83648,
    "velocity": 59
  },
  {
    "note": 55,
    "time": 83648,
    "velocity": 62
  },
  {
    "note": 67,
    "time": 83706,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 83706,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 83712,
    "velocity": 56
  },
  {
    "note": 52,
    "time": 83712,
    "velocity": 57
  },
  {
    "note": 64,
    "time": 83770,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 83770,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 83776,
    "velocity": 68
  },
  {
    "note": 55,
    "time": 83776,
    "velocity": 69
  },
  {
    "note": 67,
    "time": 83834,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 83834,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 83840,
    "velocity": 66
  },
  {
    "note": 58,
    "time": 83840,
    "velocity": 66
  },
  {
    "note": 70,
    "time": 83898,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 83898,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 83904,
    "velocity": 70
  },
  {
    "note": 61,
    "time": 83904,
    "velocity": 73
  },
  {
    "note": 73,
    "time": 83962,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 83962,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 83968,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 83968,
    "velocity": 69
  },
  {
    "note": 76,
    "time": 84026,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 84026,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 84032,
    "velocity": 57
  },
  {
    "note": 61,
    "time": 84032,
    "velocity": 56
  },
  {
    "note": 73,
    "time": 84090,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 84090,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 84096,
    "velocity": 56
  },
  {
    "note": 58,
    "time": 84096,
    "velocity": 55
  },
  {
    "note": 70,
    "time": 84154,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 84154,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 84160,
    "velocity": 60
  },
  {
    "note": 55,
    "time": 84160,
    "velocity": 59
  },
  {
    "note": 67,
    "time": 84218,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 84218,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 84224,
    "velocity": 57
  },
  {
    "note": 52,
    "time": 84224,
    "velocity": 56
  },
  {
    "note": 64,
    "time": 84282,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 84282,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 84288,
    "velocity": 67
  },
  {
    "note": 55,
    "time": 84288,
    "velocity": 67
  },
  {
    "note": 67,
    "time": 84346,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 84346,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 84352,
    "velocity": 70
  },
  {
    "note": 58,
    "time": 84352,
    "velocity": 68
  },
  {
    "note": 70,
    "time": 84410,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 84410,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 84416,
    "velocity": 73
  },
  {
    "note": 61,
    "time": 84416,
    "velocity": 73
  },
  {
    "note": 73,
    "time": 84474,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 84474,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 84480,
    "velocity": 68
  },
  {
    "note": 64,
    "time": 84480,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 84538,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 84538,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 84544,
    "velocity": 58
  },
  {
    "note": 61,
    "time": 84544,
    "velocity": 58
  },
  {
    "note": 73,
    "time": 84602,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 84602,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 84608,
    "velocity": 57
  },
  {
    "note": 58,
    "time": 84608,
    "velocity": 55
  },
  {
    "note": 70,
    "time": 84666,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 84666,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 84672,
    "velocity": 63
  },
  {
    "note": 57,
    "time": 84672,
    "velocity": 63
  },
  {
    "note": 69,
    "time": 84730,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 84730,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 84736,
    "velocity": 75
  },
  {
    "note": 53,
    "time": 84736,
    "velocity": 73
  },
  {
    "note": 65,
    "time": 84736,
    "velocity": 73
  },
  {
    "note": 77,
    "time": 84794,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 84794,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 84794,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 84800,
    "velocity": 69
  },
  {
    "note": 57,
    "time": 84800,
    "velocity": 51
  },
  {
    "note": 81,
    "time": 84858,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 84858,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 84864,
    "velocity": 70
  },
  {
    "note": 61,
    "time": 84864,
    "velocity": 67
  },
  {
    "note": 85,
    "time": 84922,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 84922,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 84928,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 84928,
    "velocity": 69
  },
  {
    "note": 86,
    "time": 84986,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 84986,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 84992,
    "velocity": 67
  },
  {
    "note": 65,
    "time": 84992,
    "velocity": 67
  },
  {
    "note": 89,
    "time": 85050,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 85050,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 85056,
    "velocity": 57
  },
  {
    "note": 62,
    "time": 85056,
    "velocity": 60
  },
  {
    "note": 86,
    "time": 85114,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 85114,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 85120,
    "velocity": 53
  },
  {
    "note": 57,
    "time": 85120,
    "velocity": 74
  },
  {
    "note": 69,
    "time": 85120,
    "velocity": 72
  },
  {
    "note": 81,
    "time": 85178,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 85178,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 85178,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 85184,
    "velocity": 66
  },
  {
    "note": 70,
    "time": 85184,
    "velocity": 69
  },
  {
    "note": 58,
    "time": 85184,
    "velocity": 59
  },
  {
    "note": 82,
    "time": 85242,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 85242,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 85248,
    "velocity": 67
  },
  {
    "note": 86,
    "time": 85248,
    "velocity": 68
  },
  {
    "note": 62,
    "time": 85248,
    "velocity": 68
  },
  {
    "note": 74,
    "time": 85306,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 85306,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 85306,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 85312,
    "velocity": 56
  },
  {
    "note": 58,
    "time": 85312,
    "velocity": 59
  },
  {
    "note": 70,
    "time": 85357,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 85370,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 85370,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 85376,
    "velocity": 57
  },
  {
    "note": 67,
    "time": 85376,
    "velocity": 57
  },
  {
    "note": 55,
    "time": 85376,
    "velocity": 55
  },
  {
    "note": 79,
    "time": 85434,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 85434,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 85434,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 85440,
    "velocity": 60
  },
  {
    "note": 65,
    "time": 85440,
    "velocity": 59
  },
  {
    "note": 53,
    "time": 85440,
    "velocity": 60
  },
  {
    "note": 77,
    "time": 85498,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 85498,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 85504,
    "velocity": 67
  },
  {
    "note": 81,
    "time": 85504,
    "velocity": 69
  },
  {
    "note": 57,
    "time": 85504,
    "velocity": 67
  },
  {
    "note": 69,
    "time": 85562,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 85562,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 85562,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 85568,
    "velocity": 57
  },
  {
    "note": 53,
    "time": 85568,
    "velocity": 55
  },
  {
    "note": 65,
    "time": 85613,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 85626,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 85626,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 85632,
    "velocity": 56
  },
  {
    "note": 62,
    "time": 85632,
    "velocity": 56
  },
  {
    "note": 50,
    "time": 85632,
    "velocity": 55
  },
  {
    "note": 74,
    "time": 85690,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 85690,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 85690,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 85696,
    "velocity": 55
  },
  {
    "note": 57,
    "time": 85696,
    "velocity": 57
  },
  {
    "note": 45,
    "time": 85696,
    "velocity": 57
  },
  {
    "note": 69,
    "time": 85754,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 85754,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 85760,
    "velocity": 71
  },
  {
    "note": 74,
    "time": 85760,
    "velocity": 70
  },
  {
    "note": 50,
    "time": 85760,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 85812,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 85818,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 85818,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 85818,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 85824,
    "velocity": 55
  },
  {
    "note": 45,
    "time": 85824,
    "velocity": 56
  },
  {
    "note": 69,
    "time": 85882,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 85882,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 85888,
    "velocity": 54
  },
  {
    "note": 41,
    "time": 85888,
    "velocity": 56
  },
  {
    "note": 65,
    "time": 85946,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 85946,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 85952,
    "velocity": 60
  },
  {
    "note": 38,
    "time": 85952,
    "velocity": 58
  },
  {
    "note": 62,
    "time": 86010,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 86010,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 86016,
    "velocity": 79
  },
  {
    "note": 50,
    "time": 86016,
    "velocity": 80
  },
  {
    "note": 74,
    "time": 86074,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 86074,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 86080,
    "velocity": 63
  },
  {
    "note": 49,
    "time": 86080,
    "velocity": 62
  },
  {
    "note": 73,
    "time": 86138,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 86138,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 86144,
    "velocity": 59
  },
  {
    "note": 47,
    "time": 86144,
    "velocity": 58
  },
  {
    "note": 71,
    "time": 86202,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 86202,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 86208,
    "velocity": 68
  },
  {
    "note": 49,
    "time": 86208,
    "velocity": 59
  },
  {
    "note": 61,
    "time": 86208,
    "velocity": 59
  },
  {
    "note": 73,
    "time": 86240,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 86240,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 86240,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 86272,
    "velocity": 76
  },
  {
    "note": 82,
    "time": 86272,
    "velocity": 79
  },
  {
    "note": 58,
    "time": 86272,
    "velocity": 57
  },
  {
    "note": 70,
    "time": 86330,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 86330,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 86330,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 86336,
    "velocity": 62
  },
  {
    "note": 81,
    "time": 86336,
    "velocity": 62
  },
  {
    "note": 57,
    "time": 86336,
    "velocity": 57
  },
  {
    "note": 69,
    "time": 86394,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 86394,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 86394,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 86400,
    "velocity": 59
  },
  {
    "note": 79,
    "time": 86400,
    "velocity": 57
  },
  {
    "note": 55,
    "time": 86400,
    "velocity": 60
  },
  {
    "note": 67,
    "time": 86458,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 86458,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 86458,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 86464,
    "velocity": 62
  },
  {
    "note": 77,
    "time": 86464,
    "velocity": 59
  },
  {
    "note": 53,
    "time": 86464,
    "velocity": 63
  },
  {
    "note": 65,
    "time": 86496,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 86496,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 86496,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 86528,
    "velocity": 64
  },
  {
    "note": 79,
    "time": 86528,
    "velocity": 67
  },
  {
    "note": 55,
    "time": 86528,
    "velocity": 66
  },
  {
    "note": 67,
    "time": 86586,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 86586,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 86586,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 86592,
    "velocity": 59
  },
  {
    "note": 77,
    "time": 86592,
    "velocity": 60
  },
  {
    "note": 53,
    "time": 86592,
    "velocity": 59
  },
  {
    "note": 65,
    "time": 86650,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 86650,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 86650,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 86656,
    "velocity": 58
  },
  {
    "note": 76,
    "time": 86656,
    "velocity": 59
  },
  {
    "note": 52,
    "time": 86656,
    "velocity": 58
  },
  {
    "note": 64,
    "time": 86714,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 86714,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 86714,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 86720,
    "velocity": 59
  },
  {
    "note": 74,
    "time": 86720,
    "velocity": 59
  },
  {
    "note": 50,
    "time": 86720,
    "velocity": 60
  },
  {
    "note": 62,
    "time": 86778,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 86778,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 86778,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 86784,
    "velocity": 56
  },
  {
    "note": 46,
    "time": 86784,
    "velocity": 75
  },
  {
    "note": 58,
    "time": 86784,
    "velocity": 76
  },
  {
    "note": 70,
    "time": 86816,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 86816,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 86816,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 86848,
    "velocity": 60
  },
  {
    "note": 45,
    "time": 86848,
    "velocity": 62
  },
  {
    "note": 57,
    "time": 86848,
    "velocity": 61
  },
  {
    "note": 69,
    "time": 86880,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 86880,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 86880,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 86912,
    "velocity": 60
  },
  {
    "note": 43,
    "time": 86912,
    "velocity": 58
  },
  {
    "note": 55,
    "time": 86912,
    "velocity": 58
  },
  {
    "note": 67,
    "time": 86944,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 86944,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 86944,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 86976,
    "velocity": 62
  },
  {
    "note": 41,
    "time": 86976,
    "velocity": 59
  },
  {
    "note": 53,
    "time": 86976,
    "velocity": 60
  },
  {
    "note": 65,
    "time": 87008,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 87008,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 87008,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 87040,
    "velocity": 65
  },
  {
    "note": 43,
    "time": 87040,
    "velocity": 64
  },
  {
    "note": 55,
    "time": 87040,
    "velocity": 68
  },
  {
    "note": 67,
    "time": 87072,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 87072,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 87072,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 87104,
    "velocity": 60
  },
  {
    "note": 41,
    "time": 87104,
    "velocity": 60
  },
  {
    "note": 53,
    "time": 87104,
    "velocity": 58
  },
  {
    "note": 65,
    "time": 87136,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 87136,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 87136,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 87168,
    "velocity": 59
  },
  {
    "note": 40,
    "time": 87168,
    "velocity": 59
  },
  {
    "note": 52,
    "time": 87168,
    "velocity": 60
  },
  {
    "note": 64,
    "time": 87200,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 87200,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 87200,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 87232,
    "velocity": 61
  },
  {
    "note": 50,
    "time": 87232,
    "velocity": 61
  },
  {
    "note": 38,
    "time": 87232,
    "velocity": 51
  },
  {
    "note": 62,
    "time": 87290,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 87290,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 87290,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 87296,
    "velocity": 66
  },
  {
    "note": 40,
    "time": 87296,
    "velocity": 64
  },
  {
    "note": 64,
    "time": 87325,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 87325,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 87328,
    "velocity": 70
  },
  {
    "note": 41,
    "time": 87328,
    "velocity": 74
  },
  {
    "note": 65,
    "time": 87357,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 87357,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 87360,
    "velocity": 72
  },
  {
    "note": 43,
    "time": 87360,
    "velocity": 79
  },
  {
    "note": 67,
    "time": 87389,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 87389,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 87392,
    "velocity": 78
  },
  {
    "note": 45,
    "time": 87392,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 87421,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 87421,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 87424,
    "velocity": 81
  },
  {
    "note": 47,
    "time": 87424,
    "velocity": 96
  },
  {
    "note": 71,
    "time": 87453,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 87453,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 87456,
    "velocity": 86
  },
  {
    "note": 49,
    "time": 87456,
    "velocity": 102
  },
  {
    "note": 73,
    "time": 87485,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 87485,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 87488,
    "velocity": 89
  },
  {
    "note": 50,
    "time": 87488,
    "velocity": 105
  },
  {
    "note": 74,
    "time": 87546,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 87546,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 87552,
    "velocity": 85
  },
  {
    "note": 53,
    "time": 87552,
    "velocity": 106
  },
  {
    "note": 77,
    "time": 87610,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 87610,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 87616,
    "velocity": 78
  },
  {
    "note": 52,
    "time": 87616,
    "velocity": 92
  },
  {
    "note": 76,
    "time": 87674,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 87674,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 87680,
    "velocity": 76
  },
  {
    "note": 50,
    "time": 87680,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 87738,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 87738,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 87744,
    "velocity": 73
  },
  {
    "note": 81,
    "time": 87744,
    "velocity": 78
  },
  {
    "note": 45,
    "time": 87744,
    "velocity": 85
  },
  {
    "note": 69,
    "time": 87802,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 87802,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 87802,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 87808,
    "velocity": 85
  },
  {
    "note": 47,
    "time": 87808,
    "velocity": 99
  },
  {
    "note": 71,
    "time": 87837,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 87837,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 87840,
    "velocity": 85
  },
  {
    "note": 49,
    "time": 87840,
    "velocity": 101
  },
  {
    "note": 73,
    "time": 87869,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 87869,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 87872,
    "velocity": 85
  },
  {
    "note": 50,
    "time": 87872,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 87901,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 87901,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 87904,
    "velocity": 85
  },
  {
    "note": 52,
    "time": 87904,
    "velocity": 102
  },
  {
    "note": 76,
    "time": 87933,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 87933,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 87936,
    "velocity": 85
  },
  {
    "note": 53,
    "time": 87936,
    "velocity": 101
  },
  {
    "note": 77,
    "time": 87965,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 87965,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 87968,
    "velocity": 85
  },
  {
    "note": 55,
    "time": 87968,
    "velocity": 102
  },
  {
    "note": 79,
    "time": 87997,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 87997,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 88000,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 88000,
    "velocity": 78
  },
  {
    "note": 57,
    "time": 88000,
    "velocity": 105
  },
  {
    "note": 81,
    "time": 88058,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 88058,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 88058,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 88064,
    "velocity": 103
  },
  {
    "note": 88,
    "time": 88064,
    "velocity": 103
  },
  {
    "note": 67,
    "time": 88064,
    "velocity": 122
  },
  {
    "note": 76,
    "time": 88064,
    "velocity": 121
  },
  {
    "note": 79,
    "time": 88122,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 88122,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 88122,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 88122,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 88128,
    "velocity": 80
  },
  {
    "note": 86,
    "time": 88128,
    "velocity": 81
  },
  {
    "note": 65,
    "time": 88128,
    "velocity": 93
  },
  {
    "note": 74,
    "time": 88128,
    "velocity": 93
  },
  {
    "note": 77,
    "time": 88186,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 88186,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 88186,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 88186,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 88192,
    "velocity": 81
  },
  {
    "note": 85,
    "time": 88192,
    "velocity": 80
  },
  {
    "note": 64,
    "time": 88192,
    "velocity": 91
  },
  {
    "note": 73,
    "time": 88192,
    "velocity": 91
  },
  {
    "note": 76,
    "time": 88250,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 88250,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 88250,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 88250,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 88256,
    "velocity": 76
  },
  {
    "note": 86,
    "time": 88256,
    "velocity": 75
  },
  {
    "note": 65,
    "time": 88256,
    "velocity": 95
  },
  {
    "note": 74,
    "time": 88256,
    "velocity": 95
  },
  {
    "note": 77,
    "time": 88314,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 88314,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 88314,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 88314,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 88320,
    "velocity": 83
  },
  {
    "note": 75,
    "time": 88320,
    "velocity": 107
  },
  {
    "note": 87,
    "time": 88349,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 88349,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 88352,
    "velocity": 79
  },
  {
    "note": 74,
    "time": 88352,
    "velocity": 96
  },
  {
    "note": 86,
    "time": 88381,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 88381,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 88384,
    "velocity": 79
  },
  {
    "note": 72,
    "time": 88384,
    "velocity": 91
  },
  {
    "note": 84,
    "time": 88413,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 88413,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 88416,
    "velocity": 84
  },
  {
    "note": 70,
    "time": 88416,
    "velocity": 93
  },
  {
    "note": 82,
    "time": 88445,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 88445,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 88448,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 88448,
    "velocity": 91
  },
  {
    "note": 81,
    "time": 88477,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 88477,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 88480,
    "velocity": 91
  },
  {
    "note": 67,
    "time": 88480,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 88509,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 88509,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 88512,
    "velocity": 95
  },
  {
    "note": 66,
    "time": 88512,
    "velocity": 93
  },
  {
    "note": 75,
    "time": 88576,
    "velocity": 94
  },
  {
    "note": 63,
    "time": 88576,
    "velocity": 80
  },
  {
    "note": 78,
    "time": 88628,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 88628,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 88634,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 88634,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 88640,
    "velocity": 103
  },
  {
    "note": 74,
    "time": 88640,
    "velocity": 98
  },
  {
    "note": 69,
    "time": 88640,
    "velocity": 104
  },
  {
    "note": 62,
    "time": 88640,
    "velocity": 81
  },
  {
    "note": 74,
    "time": 88698,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 88698,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 88704,
    "velocity": 98
  },
  {
    "note": 60,
    "time": 88704,
    "velocity": 82
  },
  {
    "note": 72,
    "time": 88762,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 88762,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 88768,
    "velocity": 100
  },
  {
    "note": 58,
    "time": 88768,
    "velocity": 85
  },
  {
    "note": 58,
    "time": 88826,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 88832,
    "velocity": 77
  },
  {
    "note": 55,
    "time": 88832,
    "velocity": 81
  },
  {
    "note": 81,
    "time": 88884,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 88884,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 88884,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 88890,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 88890,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 88896,
    "velocity": 91
  },
  {
    "note": 71,
    "time": 88896,
    "velocity": 107
  },
  {
    "note": 67,
    "time": 88896,
    "velocity": 88
  },
  {
    "note": 41,
    "time": 88896,
    "velocity": 81
  },
  {
    "note": 53,
    "time": 88896,
    "velocity": 80
  },
  {
    "note": 41,
    "time": 88954,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 88954,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 88960,
    "velocity": 94
  },
  {
    "note": 55,
    "time": 88960,
    "velocity": 90
  },
  {
    "note": 79,
    "time": 89012,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 89012,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 89012,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89018,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89018,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 89024,
    "velocity": 111
  },
  {
    "note": 72,
    "time": 89024,
    "velocity": 127
  },
  {
    "note": 79,
    "time": 89024,
    "velocity": 126
  },
  {
    "note": 39,
    "time": 89024,
    "velocity": 81
  },
  {
    "note": 51,
    "time": 89024,
    "velocity": 80
  },
  {
    "note": 39,
    "time": 89082,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 89082,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89088,
    "velocity": 96
  },
  {
    "note": 55,
    "time": 89088,
    "velocity": 95
  },
  {
    "note": 84,
    "time": 89140,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 89140,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89140,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89146,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89146,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 89152,
    "velocity": 93
  },
  {
    "note": 83,
    "time": 89152,
    "velocity": 94
  },
  {
    "note": 79,
    "time": 89152,
    "velocity": 108
  },
  {
    "note": 38,
    "time": 89152,
    "velocity": 76
  },
  {
    "note": 50,
    "time": 89152,
    "velocity": 79
  },
  {
    "note": 38,
    "time": 89210,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 89210,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89216,
    "velocity": 99
  },
  {
    "note": 55,
    "time": 89216,
    "velocity": 99
  },
  {
    "note": 71,
    "time": 89268,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 89268,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89268,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89274,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89274,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 89280,
    "velocity": 110
  },
  {
    "note": 87,
    "time": 89280,
    "velocity": 107
  },
  {
    "note": 79,
    "time": 89280,
    "velocity": 97
  },
  {
    "note": 36,
    "time": 89280,
    "velocity": 84
  },
  {
    "note": 48,
    "time": 89280,
    "velocity": 82
  },
  {
    "note": 79,
    "time": 89318,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 89322,
    "velocity": 99
  },
  {
    "note": 36,
    "time": 89338,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 89338,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89344,
    "velocity": 112
  },
  {
    "note": 55,
    "time": 89344,
    "velocity": 110
  },
  {
    "note": 80,
    "time": 89361,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89365,
    "velocity": 92
  },
  {
    "note": 75,
    "time": 89396,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 89396,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89402,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89402,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89404,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 89408,
    "velocity": 94
  },
  {
    "note": 86,
    "time": 89408,
    "velocity": 92
  },
  {
    "note": 80,
    "time": 89408,
    "velocity": 99
  },
  {
    "note": 35,
    "time": 89408,
    "velocity": 81
  },
  {
    "note": 47,
    "time": 89408,
    "velocity": 77
  },
  {
    "note": 80,
    "time": 89446,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89450,
    "velocity": 93
  },
  {
    "note": 35,
    "time": 89466,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 89466,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89472,
    "velocity": 112
  },
  {
    "note": 55,
    "time": 89472,
    "velocity": 109
  },
  {
    "note": 79,
    "time": 89489,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 89493,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 89524,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 89524,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89530,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89530,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 89532,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 89536,
    "velocity": 105
  },
  {
    "note": 87,
    "time": 89536,
    "velocity": 103
  },
  {
    "note": 79,
    "time": 89536,
    "velocity": 94
  },
  {
    "note": 36,
    "time": 89536,
    "velocity": 82
  },
  {
    "note": 48,
    "time": 89536,
    "velocity": 84
  },
  {
    "note": 79,
    "time": 89574,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 89578,
    "velocity": 100
  },
  {
    "note": 36,
    "time": 89594,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 89594,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89600,
    "velocity": 110
  },
  {
    "note": 55,
    "time": 89600,
    "velocity": 109
  },
  {
    "note": 80,
    "time": 89617,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89621,
    "velocity": 94
  },
  {
    "note": 75,
    "time": 89652,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 89652,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89658,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89658,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89660,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 89664,
    "velocity": 84
  },
  {
    "note": 83,
    "time": 89664,
    "velocity": 87
  },
  {
    "note": 80,
    "time": 89664,
    "velocity": 100
  },
  {
    "note": 38,
    "time": 89664,
    "velocity": 83
  },
  {
    "note": 50,
    "time": 89664,
    "velocity": 87
  },
  {
    "note": 80,
    "time": 89702,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89706,
    "velocity": 92
  },
  {
    "note": 38,
    "time": 89722,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 89722,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89728,
    "velocity": 107
  },
  {
    "note": 55,
    "time": 89728,
    "velocity": 105
  },
  {
    "note": 79,
    "time": 89745,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 89749,
    "velocity": 102
  },
  {
    "note": 71,
    "time": 89780,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 89780,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89786,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89786,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 89788,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 89792,
    "velocity": 100
  },
  {
    "note": 84,
    "time": 89792,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 89792,
    "velocity": 95
  },
  {
    "note": 39,
    "time": 89792,
    "velocity": 92
  },
  {
    "note": 51,
    "time": 89792,
    "velocity": 90
  },
  {
    "note": 79,
    "time": 89830,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 89834,
    "velocity": 101
  },
  {
    "note": 39,
    "time": 89850,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 89850,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89856,
    "velocity": 105
  },
  {
    "note": 55,
    "time": 89856,
    "velocity": 103
  },
  {
    "note": 80,
    "time": 89873,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89877,
    "velocity": 93
  },
  {
    "note": 72,
    "time": 89908,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 89908,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89914,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 89914,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89916,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 89920,
    "velocity": 92
  },
  {
    "note": 83,
    "time": 89920,
    "velocity": 92
  },
  {
    "note": 80,
    "time": 89920,
    "velocity": 102
  },
  {
    "note": 31,
    "time": 89920,
    "velocity": 70
  },
  {
    "note": 43,
    "time": 89920,
    "velocity": 71
  },
  {
    "note": 80,
    "time": 89958,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 89962,
    "velocity": 91
  },
  {
    "note": 31,
    "time": 89978,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89978,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 89984,
    "velocity": 117
  },
  {
    "note": 55,
    "time": 89984,
    "velocity": 119
  },
  {
    "note": 79,
    "time": 90001,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90005,
    "velocity": 102
  },
  {
    "note": 71,
    "time": 90036,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 90036,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90042,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90042,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90044,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 90048,
    "velocity": 101
  },
  {
    "note": 84,
    "time": 90048,
    "velocity": 101
  },
  {
    "note": 79,
    "time": 90048,
    "velocity": 94
  },
  {
    "note": 33,
    "time": 90048,
    "velocity": 81
  },
  {
    "note": 45,
    "time": 90048,
    "velocity": 79
  },
  {
    "note": 79,
    "time": 90086,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90090,
    "velocity": 101
  },
  {
    "note": 33,
    "time": 90106,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 90106,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90112,
    "velocity": 117
  },
  {
    "note": 55,
    "time": 90112,
    "velocity": 116
  },
  {
    "note": 80,
    "time": 90129,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90133,
    "velocity": 91
  },
  {
    "note": 72,
    "time": 90164,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 90164,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90170,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90170,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90172,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 90176,
    "velocity": 103
  },
  {
    "note": 86,
    "time": 90176,
    "velocity": 102
  },
  {
    "note": 80,
    "time": 90176,
    "velocity": 100
  },
  {
    "note": 35,
    "time": 90176,
    "velocity": 81
  },
  {
    "note": 47,
    "time": 90176,
    "velocity": 82
  },
  {
    "note": 80,
    "time": 90214,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90218,
    "velocity": 94
  },
  {
    "note": 35,
    "time": 90234,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 90234,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90240,
    "velocity": 112
  },
  {
    "note": 55,
    "time": 90240,
    "velocity": 112
  },
  {
    "note": 79,
    "time": 90257,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90261,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 90292,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 90292,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90298,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90298,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90300,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 90304,
    "velocity": 103
  },
  {
    "note": 87,
    "time": 90304,
    "velocity": 103
  },
  {
    "note": 79,
    "time": 90304,
    "velocity": 96
  },
  {
    "note": 36,
    "time": 90304,
    "velocity": 84
  },
  {
    "note": 48,
    "time": 90304,
    "velocity": 83
  },
  {
    "note": 79,
    "time": 90342,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90346,
    "velocity": 102
  },
  {
    "note": 36,
    "time": 90362,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 90362,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90368,
    "velocity": 109
  },
  {
    "note": 55,
    "time": 90368,
    "velocity": 111
  },
  {
    "note": 80,
    "time": 90385,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90389,
    "velocity": 90
  },
  {
    "note": 75,
    "time": 90420,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 90420,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90426,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90426,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90428,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 90432,
    "velocity": 93
  },
  {
    "note": 86,
    "time": 90432,
    "velocity": 93
  },
  {
    "note": 80,
    "time": 90432,
    "velocity": 100
  },
  {
    "note": 35,
    "time": 90432,
    "velocity": 78
  },
  {
    "note": 47,
    "time": 90432,
    "velocity": 78
  },
  {
    "note": 80,
    "time": 90470,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90474,
    "velocity": 94
  },
  {
    "note": 35,
    "time": 90490,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 90490,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90496,
    "velocity": 112
  },
  {
    "note": 55,
    "time": 90496,
    "velocity": 111
  },
  {
    "note": 79,
    "time": 90513,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90517,
    "velocity": 98
  },
  {
    "note": 74,
    "time": 90548,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 90548,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90554,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90554,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90556,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 90560,
    "velocity": 103
  },
  {
    "note": 87,
    "time": 90560,
    "velocity": 102
  },
  {
    "note": 79,
    "time": 90560,
    "velocity": 96
  },
  {
    "note": 36,
    "time": 90560,
    "velocity": 86
  },
  {
    "note": 48,
    "time": 90560,
    "velocity": 83
  },
  {
    "note": 79,
    "time": 90598,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90602,
    "velocity": 98
  },
  {
    "note": 36,
    "time": 90618,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 90618,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90624,
    "velocity": 113
  },
  {
    "note": 55,
    "time": 90624,
    "velocity": 110
  },
  {
    "note": 80,
    "time": 90641,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90645,
    "velocity": 90
  },
  {
    "note": 75,
    "time": 90676,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 90676,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90682,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90682,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90684,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 90688,
    "velocity": 101
  },
  {
    "note": 89,
    "time": 90688,
    "velocity": 103
  },
  {
    "note": 80,
    "time": 90688,
    "velocity": 98
  },
  {
    "note": 38,
    "time": 90688,
    "velocity": 84
  },
  {
    "note": 50,
    "time": 90688,
    "velocity": 84
  },
  {
    "note": 80,
    "time": 90726,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90730,
    "velocity": 93
  },
  {
    "note": 38,
    "time": 90746,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 90746,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90752,
    "velocity": 108
  },
  {
    "note": 55,
    "time": 90752,
    "velocity": 107
  },
  {
    "note": 79,
    "time": 90769,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90773,
    "velocity": 100
  },
  {
    "note": 77,
    "time": 90804,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 90804,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 90810,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90810,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90812,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 90816,
    "velocity": 106
  },
  {
    "note": 79,
    "time": 90816,
    "velocity": 95
  },
  {
    "note": 51,
    "time": 90816,
    "velocity": 89
  },
  {
    "note": 39,
    "time": 90816,
    "velocity": 75
  },
  {
    "note": 79,
    "time": 90854,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 90858,
    "velocity": 100
  },
  {
    "note": 39,
    "time": 90874,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90880,
    "velocity": 116
  },
  {
    "note": 80,
    "time": 90897,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90901,
    "velocity": 92
  },
  {
    "note": 91,
    "time": 90932,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 90932,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 90938,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90940,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 90944,
    "velocity": 68
  },
  {
    "note": 80,
    "time": 90944,
    "velocity": 98
  },
  {
    "note": 65,
    "time": 90944,
    "velocity": 119
  },
  {
    "note": 50,
    "time": 90944,
    "velocity": 87
  },
  {
    "note": 80,
    "time": 90982,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 90986,
    "velocity": 92
  },
  {
    "note": 50,
    "time": 91002,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91008,
    "velocity": 109
  },
  {
    "note": 79,
    "time": 91025,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91029,
    "velocity": 99
  },
  {
    "note": 77,
    "time": 91060,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 91060,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91066,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91068,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 91072,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 91072,
    "velocity": 97
  },
  {
    "note": 63,
    "time": 91072,
    "velocity": 95
  },
  {
    "note": 48,
    "time": 91072,
    "velocity": 84
  },
  {
    "note": 79,
    "time": 91110,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91114,
    "velocity": 99
  },
  {
    "note": 48,
    "time": 91130,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91136,
    "velocity": 111
  },
  {
    "note": 80,
    "time": 91153,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91157,
    "velocity": 91
  },
  {
    "note": 75,
    "time": 91188,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 91188,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91194,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91196,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 91200,
    "velocity": 91
  },
  {
    "note": 80,
    "time": 91200,
    "velocity": 100
  },
  {
    "note": 62,
    "time": 91200,
    "velocity": 92
  },
  {
    "note": 47,
    "time": 91200,
    "velocity": 79
  },
  {
    "note": 80,
    "time": 91238,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91242,
    "velocity": 93
  },
  {
    "note": 47,
    "time": 91258,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91264,
    "velocity": 111
  },
  {
    "note": 79,
    "time": 91281,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91285,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 91316,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 91316,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91322,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91324,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 91328,
    "velocity": 92
  },
  {
    "note": 79,
    "time": 91328,
    "velocity": 93
  },
  {
    "note": 60,
    "time": 91328,
    "velocity": 93
  },
  {
    "note": 48,
    "time": 91328,
    "velocity": 84
  },
  {
    "note": 79,
    "time": 91366,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91370,
    "velocity": 101
  },
  {
    "note": 48,
    "time": 91386,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91392,
    "velocity": 112
  },
  {
    "note": 80,
    "time": 91409,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91413,
    "velocity": 90
  },
  {
    "note": 72,
    "time": 91444,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 91444,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91450,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91452,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 91456,
    "velocity": 90
  },
  {
    "note": 80,
    "time": 91456,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 91456,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 91456,
    "velocity": 110
  },
  {
    "note": 59,
    "time": 91456,
    "velocity": 106
  },
  {
    "note": 80,
    "time": 91494,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91498,
    "velocity": 91
  },
  {
    "note": 50,
    "time": 91514,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 91514,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91520,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 91537,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91541,
    "velocity": 98
  },
  {
    "note": 71,
    "time": 91572,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 91572,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91578,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91580,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 91584,
    "velocity": 100
  },
  {
    "note": 79,
    "time": 91584,
    "velocity": 96
  },
  {
    "note": 63,
    "time": 91584,
    "velocity": 103
  },
  {
    "note": 51,
    "time": 91584,
    "velocity": 110
  },
  {
    "note": 60,
    "time": 91584,
    "velocity": 111
  },
  {
    "note": 79,
    "time": 91622,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91626,
    "velocity": 100
  },
  {
    "note": 51,
    "time": 91642,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 91642,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91648,
    "velocity": 83
  },
  {
    "note": 80,
    "time": 91665,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91669,
    "velocity": 90
  },
  {
    "note": 72,
    "time": 91700,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 91700,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91706,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91708,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 91712,
    "velocity": 103
  },
  {
    "note": 80,
    "time": 91712,
    "velocity": 101
  },
  {
    "note": 65,
    "time": 91712,
    "velocity": 102
  },
  {
    "note": 53,
    "time": 91712,
    "velocity": 113
  },
  {
    "note": 62,
    "time": 91712,
    "velocity": 110
  },
  {
    "note": 80,
    "time": 91750,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91754,
    "velocity": 91
  },
  {
    "note": 53,
    "time": 91770,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 91770,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91776,
    "velocity": 82
  },
  {
    "note": 79,
    "time": 91793,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91797,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 91828,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 91828,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91836,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 91840,
    "velocity": 105
  },
  {
    "note": 79,
    "time": 91840,
    "velocity": 95
  },
  {
    "note": 63,
    "time": 91840,
    "velocity": 105
  },
  {
    "note": 67,
    "time": 91840,
    "velocity": 103
  },
  {
    "note": 79,
    "time": 91878,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 91882,
    "velocity": 99
  },
  {
    "note": 55,
    "time": 91898,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91904,
    "velocity": 96
  },
  {
    "note": 80,
    "time": 91921,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91925,
    "velocity": 93
  },
  {
    "note": 75,
    "time": 91956,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 91956,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 91956,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 91962,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 91964,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 91968,
    "velocity": 79
  },
  {
    "note": 80,
    "time": 91968,
    "velocity": 101
  },
  {
    "note": 59,
    "time": 91968,
    "velocity": 76
  },
  {
    "note": 47,
    "time": 91968,
    "velocity": 79
  },
  {
    "note": 80,
    "time": 92006,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92010,
    "velocity": 92
  },
  {
    "note": 47,
    "time": 92026,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92032,
    "velocity": 111
  },
  {
    "note": 79,
    "time": 92049,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92053,
    "velocity": 101
  },
  {
    "note": 67,
    "time": 92084,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 92084,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92090,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92092,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 92096,
    "velocity": 124
  },
  {
    "note": 81,
    "time": 92096,
    "velocity": 123
  },
  {
    "note": 79,
    "time": 92096,
    "velocity": 94
  },
  {
    "note": 60,
    "time": 92096,
    "velocity": 100
  },
  {
    "note": 48,
    "time": 92096,
    "velocity": 106
  },
  {
    "note": 57,
    "time": 92096,
    "velocity": 108
  },
  {
    "note": 79,
    "time": 92134,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92138,
    "velocity": 100
  },
  {
    "note": 48,
    "time": 92154,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 92154,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92160,
    "velocity": 90
  },
  {
    "note": 80,
    "time": 92177,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92181,
    "velocity": 90
  },
  {
    "note": 69,
    "time": 92212,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 92212,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 92212,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92218,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92220,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 92224,
    "velocity": 104
  },
  {
    "note": 83,
    "time": 92224,
    "velocity": 107
  },
  {
    "note": 80,
    "time": 92224,
    "velocity": 102
  },
  {
    "note": 62,
    "time": 92224,
    "velocity": 101
  },
  {
    "note": 50,
    "time": 92224,
    "velocity": 106
  },
  {
    "note": 59,
    "time": 92224,
    "velocity": 105
  },
  {
    "note": 80,
    "time": 92262,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92266,
    "velocity": 93
  },
  {
    "note": 50,
    "time": 92282,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 92282,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92288,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 92305,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92309,
    "velocity": 98
  },
  {
    "note": 71,
    "time": 92340,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 92340,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 92340,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92346,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92348,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 92352,
    "velocity": 105
  },
  {
    "note": 84,
    "time": 92352,
    "velocity": 107
  },
  {
    "note": 79,
    "time": 92352,
    "velocity": 94
  },
  {
    "note": 63,
    "time": 92352,
    "velocity": 102
  },
  {
    "note": 51,
    "time": 92352,
    "velocity": 111
  },
  {
    "note": 60,
    "time": 92352,
    "velocity": 109
  },
  {
    "note": 79,
    "time": 92390,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92394,
    "velocity": 102
  },
  {
    "note": 51,
    "time": 92410,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 92410,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92416,
    "velocity": 85
  },
  {
    "note": 80,
    "time": 92433,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92437,
    "velocity": 93
  },
  {
    "note": 72,
    "time": 92468,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 92468,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 92468,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92474,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92476,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 92480,
    "velocity": 91
  },
  {
    "note": 83,
    "time": 92480,
    "velocity": 92
  },
  {
    "note": 80,
    "time": 92480,
    "velocity": 100
  },
  {
    "note": 62,
    "time": 92480,
    "velocity": 92
  },
  {
    "note": 50,
    "time": 92480,
    "velocity": 106
  },
  {
    "note": 59,
    "time": 92480,
    "velocity": 104
  },
  {
    "note": 80,
    "time": 92518,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92522,
    "velocity": 93
  },
  {
    "note": 50,
    "time": 92538,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 92538,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92544,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 92561,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92565,
    "velocity": 98
  },
  {
    "note": 71,
    "time": 92596,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 92596,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 92596,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92602,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92604,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 92608,
    "velocity": 105
  },
  {
    "note": 84,
    "time": 92608,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 92608,
    "velocity": 95
  },
  {
    "note": 63,
    "time": 92608,
    "velocity": 102
  },
  {
    "note": 51,
    "time": 92608,
    "velocity": 109
  },
  {
    "note": 60,
    "time": 92608,
    "velocity": 108
  },
  {
    "note": 79,
    "time": 92646,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92650,
    "velocity": 99
  },
  {
    "note": 51,
    "time": 92666,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 92666,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92672,
    "velocity": 84
  },
  {
    "note": 80,
    "time": 92689,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92693,
    "velocity": 92
  },
  {
    "note": 72,
    "time": 92724,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 92724,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 92724,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92730,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92732,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 92736,
    "velocity": 100
  },
  {
    "note": 86,
    "time": 92736,
    "velocity": 102
  },
  {
    "note": 80,
    "time": 92736,
    "velocity": 100
  },
  {
    "note": 65,
    "time": 92736,
    "velocity": 103
  },
  {
    "note": 53,
    "time": 92736,
    "velocity": 111
  },
  {
    "note": 62,
    "time": 92736,
    "velocity": 113
  },
  {
    "note": 80,
    "time": 92774,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 92778,
    "velocity": 91
  },
  {
    "note": 53,
    "time": 92794,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 92794,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92800,
    "velocity": 82
  },
  {
    "note": 79,
    "time": 92817,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92821,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 92852,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 92852,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 92852,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 92860,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 92864,
    "velocity": 104
  },
  {
    "note": 87,
    "time": 92864,
    "velocity": 103
  },
  {
    "note": 63,
    "time": 92864,
    "velocity": 106
  },
  {
    "note": 67,
    "time": 92864,
    "velocity": 103
  },
  {
    "note": 75,
    "time": 92922,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 92922,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 92928,
    "velocity": 79
  },
  {
    "note": 63,
    "time": 92980,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 92980,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 92980,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 92986,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 92992,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 92992,
    "velocity": 85
  },
  {
    "note": 86,
    "time": 92992,
    "velocity": 87
  },
  {
    "note": 35,
    "time": 92992,
    "velocity": 69
  },
  {
    "note": 38,
    "time": 92992,
    "velocity": 71
  },
  {
    "note": 47,
    "time": 92992,
    "velocity": 70
  },
  {
    "note": 89,
    "time": 93050,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 93056,
    "velocity": 101
  },
  {
    "note": 79,
    "time": 93108,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 93108,
    "velocity": 0
  },
  {
    "note": 35,
    "time": 93108,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 93108,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 93108,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 93114,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 93120,
    "velocity": 87
  },
  {
    "note": 87,
    "time": 93120,
    "velocity": 88
  },
  {
    "note": 36,
    "time": 93120,
    "velocity": 100
  },
  {
    "note": 39,
    "time": 93120,
    "velocity": 101
  },
  {
    "note": 48,
    "time": 93120,
    "velocity": 100
  },
  {
    "note": 79,
    "time": 93178,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 93178,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 93184,
    "velocity": 100
  },
  {
    "note": 89,
    "time": 93184,
    "velocity": 99
  },
  {
    "note": 36,
    "time": 93236,
    "velocity": 0
  },
  {
    "note": 39,
    "time": 93236,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 93236,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 93242,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 93242,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 93248,
    "velocity": 88
  },
  {
    "note": 86,
    "time": 93248,
    "velocity": 88
  },
  {
    "note": 38,
    "time": 93248,
    "velocity": 102
  },
  {
    "note": 41,
    "time": 93248,
    "velocity": 101
  },
  {
    "note": 50,
    "time": 93248,
    "velocity": 101
  },
  {
    "note": 77,
    "time": 93306,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 93306,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 93312,
    "velocity": 99
  },
  {
    "note": 87,
    "time": 93312,
    "velocity": 100
  },
  {
    "note": 38,
    "time": 93364,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 93364,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 93364,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 93370,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 93370,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 93376,
    "velocity": 91
  },
  {
    "note": 84,
    "time": 93376,
    "velocity": 90
  },
  {
    "note": 39,
    "time": 93376,
    "velocity": 105
  },
  {
    "note": 43,
    "time": 93376,
    "velocity": 103
  },
  {
    "note": 51,
    "time": 93376,
    "velocity": 102
  },
  {
    "note": 75,
    "time": 93434,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 93434,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 93440,
    "velocity": 108
  },
  {
    "note": 39,
    "time": 93492,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 93492,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 93492,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 93498,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 93504,
    "velocity": 90
  },
  {
    "note": 77,
    "time": 93504,
    "velocity": 87
  },
  {
    "note": 84,
    "time": 93504,
    "velocity": 85
  },
  {
    "note": 33,
    "time": 93504,
    "velocity": 82
  },
  {
    "note": 36,
    "time": 93504,
    "velocity": 80
  },
  {
    "note": 45,
    "time": 93504,
    "velocity": 79
  },
  {
    "note": 87,
    "time": 93562,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 93568,
    "velocity": 102
  },
  {
    "note": 77,
    "time": 93620,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 93620,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 93620,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 93620,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 93620,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 93626,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 93632,
    "velocity": 91
  },
  {
    "note": 86,
    "time": 93632,
    "velocity": 90
  },
  {
    "note": 34,
    "time": 93632,
    "velocity": 103
  },
  {
    "note": 38,
    "time": 93632,
    "velocity": 101
  },
  {
    "note": 46,
    "time": 93632,
    "velocity": 102
  },
  {
    "note": 77,
    "time": 93690,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 93690,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 93696,
    "velocity": 99
  },
  {
    "note": 87,
    "time": 93696,
    "velocity": 98
  },
  {
    "note": 34,
    "time": 93748,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 93748,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 93748,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 93754,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 93754,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 93760,
    "velocity": 89
  },
  {
    "note": 84,
    "time": 93760,
    "velocity": 87
  },
  {
    "note": 36,
    "time": 93760,
    "velocity": 100
  },
  {
    "note": 39,
    "time": 93760,
    "velocity": 101
  },
  {
    "note": 48,
    "time": 93760,
    "velocity": 102
  },
  {
    "note": 75,
    "time": 93818,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 93818,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 93824,
    "velocity": 99
  },
  {
    "note": 86,
    "time": 93824,
    "velocity": 100
  },
  {
    "note": 36,
    "time": 93876,
    "velocity": 0
  },
  {
    "note": 39,
    "time": 93876,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 93876,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 93882,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 93882,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 93888,
    "velocity": 88
  },
  {
    "note": 82,
    "time": 93888,
    "velocity": 90
  },
  {
    "note": 38,
    "time": 93888,
    "velocity": 104
  },
  {
    "note": 41,
    "time": 93888,
    "velocity": 103
  },
  {
    "note": 50,
    "time": 93888,
    "velocity": 107
  },
  {
    "note": 74,
    "time": 93946,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 93946,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 93952,
    "velocity": 107
  },
  {
    "note": 38,
    "time": 94004,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 94004,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 94004,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 94010,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 94016,
    "velocity": 91
  },
  {
    "note": 75,
    "time": 94016,
    "velocity": 85
  },
  {
    "note": 82,
    "time": 94016,
    "velocity": 85
  },
  {
    "note": 31,
    "time": 94016,
    "velocity": 78
  },
  {
    "note": 34,
    "time": 94016,
    "velocity": 79
  },
  {
    "note": 43,
    "time": 94016,
    "velocity": 78
  },
  {
    "note": 86,
    "time": 94074,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 94080,
    "velocity": 99
  },
  {
    "note": 75,
    "time": 94132,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 94132,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 94132,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 94132,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 94132,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 94138,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 94144,
    "velocity": 92
  },
  {
    "note": 84,
    "time": 94144,
    "velocity": 93
  },
  {
    "note": 33,
    "time": 94144,
    "velocity": 101
  },
  {
    "note": 36,
    "time": 94144,
    "velocity": 104
  },
  {
    "note": 45,
    "time": 94144,
    "velocity": 102
  },
  {
    "note": 75,
    "time": 94202,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 94202,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 94208,
    "velocity": 101
  },
  {
    "note": 86,
    "time": 94208,
    "velocity": 101
  },
  {
    "note": 33,
    "time": 94260,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 94260,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 94260,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 94266,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 94266,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 94272,
    "velocity": 86
  },
  {
    "note": 82,
    "time": 94272,
    "velocity": 85
  },
  {
    "note": 34,
    "time": 94272,
    "velocity": 98
  },
  {
    "note": 38,
    "time": 94272,
    "velocity": 100
  },
  {
    "note": 46,
    "time": 94272,
    "velocity": 99
  },
  {
    "note": 74,
    "time": 94330,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 94330,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 94336,
    "velocity": 102
  },
  {
    "note": 84,
    "time": 94336,
    "velocity": 102
  },
  {
    "note": 34,
    "time": 94388,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 94388,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 94388,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 94394,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 94394,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 94400,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 94400,
    "velocity": 92
  },
  {
    "note": 36,
    "time": 94400,
    "velocity": 104
  },
  {
    "note": 39,
    "time": 94400,
    "velocity": 106
  },
  {
    "note": 48,
    "time": 94400,
    "velocity": 106
  },
  {
    "note": 72,
    "time": 94458,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 94458,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 94464,
    "velocity": 108
  },
  {
    "note": 36,
    "time": 94516,
    "velocity": 0
  },
  {
    "note": 39,
    "time": 94516,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 94516,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 94522,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 94528,
    "velocity": 90
  },
  {
    "note": 72,
    "time": 94528,
    "velocity": 85
  },
  {
    "note": 78,
    "time": 94528,
    "velocity": 86
  },
  {
    "note": 38,
    "time": 94528,
    "velocity": 102
  },
  {
    "note": 50,
    "time": 94528,
    "velocity": 100
  },
  {
    "note": 84,
    "time": 94586,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 94592,
    "velocity": 101
  },
  {
    "note": 72,
    "time": 94644,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 94644,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 94644,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 94644,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 94650,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 94656,
    "velocity": 88
  },
  {
    "note": 82,
    "time": 94656,
    "velocity": 90
  },
  {
    "note": 70,
    "time": 94656,
    "velocity": 77
  },
  {
    "note": 43,
    "time": 94656,
    "velocity": 112
  },
  {
    "note": 55,
    "time": 94656,
    "velocity": 111
  },
  {
    "note": 70,
    "time": 94714,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 94720,
    "velocity": 96
  },
  {
    "note": 79,
    "time": 94772,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 94772,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 94772,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 94772,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 94778,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 94784,
    "velocity": 90
  },
  {
    "note": 81,
    "time": 94784,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 94784,
    "velocity": 86
  },
  {
    "note": 38,
    "time": 94784,
    "velocity": 86
  },
  {
    "note": 50,
    "time": 94784,
    "velocity": 85
  },
  {
    "note": 69,
    "time": 94842,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 94848,
    "velocity": 99
  },
  {
    "note": 77,
    "time": 94900,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 94900,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 94900,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 94900,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 94906,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 94912,
    "velocity": 93
  },
  {
    "note": 79,
    "time": 94912,
    "velocity": 92
  },
  {
    "note": 67,
    "time": 94912,
    "velocity": 92
  },
  {
    "note": 39,
    "time": 94912,
    "velocity": 103
  },
  {
    "note": 51,
    "time": 94912,
    "velocity": 103
  },
  {
    "note": 75,
    "time": 94970,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 94970,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 94976,
    "velocity": 103
  },
  {
    "note": 82,
    "time": 94976,
    "velocity": 105
  },
  {
    "note": 67,
    "time": 95028,
    "velocity": 0
  },
  {
    "note": 39,
    "time": 95028,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 95028,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 95034,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 95034,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 95040,
    "velocity": 93
  },
  {
    "note": 81,
    "time": 95040,
    "velocity": 93
  },
  {
    "note": 74,
    "time": 95040,
    "velocity": 109
  },
  {
    "note": 34,
    "time": 95040,
    "velocity": 82
  },
  {
    "note": 46,
    "time": 95040,
    "velocity": 81
  },
  {
    "note": 78,
    "time": 95098,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 95098,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 95104,
    "velocity": 101
  },
  {
    "note": 82,
    "time": 95104,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 95156,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 95156,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 95156,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 95162,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 95162,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 95168,
    "velocity": 126
  },
  {
    "note": 84,
    "time": 95168,
    "velocity": 127
  },
  {
    "note": 72,
    "time": 95168,
    "velocity": 124
  },
  {
    "note": 33,
    "time": 95168,
    "velocity": 91
  },
  {
    "note": 45,
    "time": 95168,
    "velocity": 91
  },
  {
    "note": 81,
    "time": 95226,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 95226,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 95232,
    "velocity": 95
  },
  {
    "note": 82,
    "time": 95232,
    "velocity": 95
  },
  {
    "note": 72,
    "time": 95284,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 95284,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 95284,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 95290,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 95290,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 95296,
    "velocity": 91
  },
  {
    "note": 81,
    "time": 95296,
    "velocity": 93
  },
  {
    "note": 69,
    "time": 95296,
    "velocity": 93
  },
  {
    "note": 36,
    "time": 95296,
    "velocity": 103
  },
  {
    "note": 48,
    "time": 95296,
    "velocity": 103
  },
  {
    "note": 78,
    "time": 95354,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 95354,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 95360,
    "velocity": 88
  },
  {
    "note": 79,
    "time": 95360,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 95412,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 95412,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 95412,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 95418,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 95418,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 95424,
    "velocity": 95
  },
  {
    "note": 78,
    "time": 95424,
    "velocity": 94
  },
  {
    "note": 38,
    "time": 95424,
    "velocity": 107
  },
  {
    "note": 50,
    "time": 95424,
    "velocity": 106
  },
  {
    "note": 74,
    "time": 95488,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 95488,
    "velocity": 84
  },
  {
    "note": 66,
    "time": 95540,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 95540,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 95546,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 95546,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 95552,
    "velocity": 103
  },
  {
    "note": 81,
    "time": 95552,
    "velocity": 102
  },
  {
    "note": 72,
    "time": 95552,
    "velocity": 89
  },
  {
    "note": 60,
    "time": 95552,
    "velocity": 88
  },
  {
    "note": 72,
    "time": 95610,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 95610,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 95616,
    "velocity": 102
  },
  {
    "note": 62,
    "time": 95616,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 95668,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 95668,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 95674,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 95674,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 95680,
    "velocity": 114
  },
  {
    "note": 86,
    "time": 95680,
    "velocity": 113
  },
  {
    "note": 58,
    "time": 95680,
    "velocity": 116
  },
  {
    "note": 70,
    "time": 95680,
    "velocity": 118
  },
  {
    "note": 74,
    "time": 95738,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 95738,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 95738,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 95738,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 95744,
    "velocity": 80
  },
  {
    "note": 62,
    "time": 95744,
    "velocity": 91
  },
  {
    "note": 67,
    "time": 95744,
    "velocity": 89
  },
  {
    "note": 79,
    "time": 95802,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 95802,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 95802,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 95808,
    "velocity": 105
  },
  {
    "note": 84,
    "time": 95808,
    "velocity": 105
  },
  {
    "note": 57,
    "time": 95808,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 95808,
    "velocity": 101
  },
  {
    "note": 72,
    "time": 95866,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 95866,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 95866,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 95866,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 95872,
    "velocity": 83
  },
  {
    "note": 78,
    "time": 95872,
    "velocity": 82
  },
  {
    "note": 62,
    "time": 95872,
    "velocity": 88
  },
  {
    "note": 66,
    "time": 95872,
    "velocity": 87
  },
  {
    "note": 74,
    "time": 95930,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 95930,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 95930,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 95930,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 95936,
    "velocity": 109
  },
  {
    "note": 82,
    "time": 95936,
    "velocity": 106
  },
  {
    "note": 55,
    "time": 95936,
    "velocity": 100
  },
  {
    "note": 67,
    "time": 95936,
    "velocity": 104
  },
  {
    "note": 70,
    "time": 95994,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 95994,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 95994,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 95994,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96000,
    "velocity": 89
  },
  {
    "note": 79,
    "time": 96000,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 96000,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 96058,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 96058,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96058,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96064,
    "velocity": 113
  },
  {
    "note": 86,
    "time": 96064,
    "velocity": 113
  },
  {
    "note": 54,
    "time": 96064,
    "velocity": 105
  },
  {
    "note": 66,
    "time": 96064,
    "velocity": 103
  },
  {
    "note": 74,
    "time": 96122,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 96122,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 96122,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 96122,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 96128,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 96128,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 96186,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96186,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 96192,
    "velocity": 102
  },
  {
    "note": 82,
    "time": 96192,
    "velocity": 100
  },
  {
    "note": 55,
    "time": 96192,
    "velocity": 109
  },
  {
    "note": 67,
    "time": 96192,
    "velocity": 109
  },
  {
    "note": 70,
    "time": 96250,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 96250,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 96250,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 96250,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96256,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 96256,
    "velocity": 85
  },
  {
    "note": 62,
    "time": 96256,
    "velocity": 83
  },
  {
    "note": 74,
    "time": 96314,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 96314,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96314,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 96320,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 96320,
    "velocity": 100
  },
  {
    "note": 57,
    "time": 96320,
    "velocity": 104
  },
  {
    "note": 66,
    "time": 96320,
    "velocity": 106
  },
  {
    "note": 69,
    "time": 96378,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 96378,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 96378,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 96378,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96384,
    "velocity": 88
  },
  {
    "note": 78,
    "time": 96384,
    "velocity": 89
  },
  {
    "note": 62,
    "time": 96384,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 96442,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 96442,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96442,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 96448,
    "velocity": 100
  },
  {
    "note": 58,
    "time": 96448,
    "velocity": 109
  },
  {
    "note": 67,
    "time": 96448,
    "velocity": 109
  },
  {
    "note": 79,
    "time": 96506,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 96506,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 96506,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96512,
    "velocity": 115
  },
  {
    "note": 86,
    "time": 96512,
    "velocity": 113
  },
  {
    "note": 62,
    "time": 96512,
    "velocity": 86
  },
  {
    "note": 74,
    "time": 96570,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 96570,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96570,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 96576,
    "velocity": 79
  },
  {
    "note": 50,
    "time": 96576,
    "velocity": 94
  },
  {
    "note": 54,
    "time": 96576,
    "velocity": 95
  },
  {
    "note": 62,
    "time": 96576,
    "velocity": 95
  },
  {
    "note": 78,
    "time": 96634,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 96634,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 96634,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96634,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96640,
    "velocity": 114
  },
  {
    "note": 86,
    "time": 96640,
    "velocity": 113
  },
  {
    "note": 62,
    "time": 96640,
    "velocity": 96
  },
  {
    "note": 74,
    "time": 96698,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 96698,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96698,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 96704,
    "velocity": 83
  },
  {
    "note": 52,
    "time": 96704,
    "velocity": 105
  },
  {
    "note": 55,
    "time": 96704,
    "velocity": 106
  },
  {
    "note": 64,
    "time": 96704,
    "velocity": 105
  },
  {
    "note": 79,
    "time": 96762,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 96762,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 96762,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 96762,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96768,
    "velocity": 109
  },
  {
    "note": 86,
    "time": 96768,
    "velocity": 112
  },
  {
    "note": 62,
    "time": 96768,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 96826,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 96826,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96826,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 96832,
    "velocity": 87
  },
  {
    "note": 54,
    "time": 96832,
    "velocity": 104
  },
  {
    "note": 57,
    "time": 96832,
    "velocity": 106
  },
  {
    "note": 66,
    "time": 96832,
    "velocity": 104
  },
  {
    "note": 81,
    "time": 96890,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 96890,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 96890,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 96890,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 96896,
    "velocity": 107
  },
  {
    "note": 86,
    "time": 96896,
    "velocity": 107
  },
  {
    "note": 62,
    "time": 96896,
    "velocity": 87
  },
  {
    "note": 74,
    "time": 96954,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 96954,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 96954,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 96960,
    "velocity": 92
  },
  {
    "note": 82,
    "time": 96960,
    "velocity": 91
  },
  {
    "note": 55,
    "time": 96960,
    "velocity": 110
  },
  {
    "note": 58,
    "time": 96960,
    "velocity": 110
  },
  {
    "note": 67,
    "time": 96960,
    "velocity": 112
  },
  {
    "note": 70,
    "time": 97018,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 97018,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 97018,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 97018,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 97018,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 97024,
    "velocity": 86
  },
  {
    "note": 62,
    "time": 97024,
    "velocity": 82
  },
  {
    "note": 79,
    "time": 97082,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 97082,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 97088,
    "velocity": 111
  },
  {
    "note": 86,
    "time": 97088,
    "velocity": 110
  },
  {
    "note": 54,
    "time": 97088,
    "velocity": 79
  },
  {
    "note": 57,
    "time": 97088,
    "velocity": 80
  },
  {
    "note": 67,
    "time": 97088,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 97146,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 97146,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 97146,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 97146,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 97152,
    "velocity": 85
  },
  {
    "note": 62,
    "time": 97152,
    "velocity": 105
  },
  {
    "note": 67,
    "time": 97204,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 97210,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 97210,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 97216,
    "velocity": 104
  },
  {
    "note": 82,
    "time": 97216,
    "velocity": 101
  },
  {
    "note": 55,
    "time": 97216,
    "velocity": 113
  },
  {
    "note": 58,
    "time": 97216,
    "velocity": 114
  },
  {
    "note": 67,
    "time": 97216,
    "velocity": 111
  },
  {
    "note": 70,
    "time": 97216,
    "velocity": 104
  },
  {
    "note": 70,
    "time": 97274,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 97274,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 97274,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 97274,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 97274,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 97280,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 97280,
    "velocity": 86
  },
  {
    "note": 70,
    "time": 97332,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 97338,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 97338,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 97344,
    "velocity": 106
  },
  {
    "note": 84,
    "time": 97344,
    "velocity": 108
  },
  {
    "note": 57,
    "time": 97344,
    "velocity": 113
  },
  {
    "note": 60,
    "time": 97344,
    "velocity": 113
  },
  {
    "note": 69,
    "time": 97344,
    "velocity": 112
  },
  {
    "note": 72,
    "time": 97344,
    "velocity": 103
  },
  {
    "note": 72,
    "time": 97402,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 97402,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 97402,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 97402,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 97402,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 97408,
    "velocity": 90
  },
  {
    "note": 62,
    "time": 97408,
    "velocity": 81
  },
  {
    "note": 72,
    "time": 97460,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 97466,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 97466,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 97472,
    "velocity": 110
  },
  {
    "note": 86,
    "time": 97472,
    "velocity": 112
  },
  {
    "note": 58,
    "time": 97472,
    "velocity": 114
  },
  {
    "note": 62,
    "time": 97472,
    "velocity": 114
  },
  {
    "note": 70,
    "time": 97472,
    "velocity": 117
  },
  {
    "note": 74,
    "time": 97530,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 97530,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 97536,
    "velocity": 60
  },
  {
    "note": 38,
    "time": 97588,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 97588,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 97588,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 97588,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 97588,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 97594,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 97600,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 97600,
    "velocity": 62
  },
  {
    "note": 60,
    "time": 97600,
    "velocity": 64
  },
  {
    "note": 70,
    "time": 97658,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 97664,
    "velocity": 76
  },
  {
    "note": 57,
    "time": 97716,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 97716,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 97722,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 97728,
    "velocity": 99
  },
  {
    "note": 70,
    "time": 97728,
    "velocity": 76
  },
  {
    "note": 67,
    "time": 97728,
    "velocity": 70
  },
  {
    "note": 55,
    "time": 97728,
    "velocity": 73
  },
  {
    "note": 58,
    "time": 97728,
    "velocity": 73
  },
  {
    "note": 70,
    "time": 97786,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 97792,
    "velocity": 74
  },
  {
    "note": 55,
    "time": 97844,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 97844,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 97850,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 97856,
    "velocity": 81
  },
  {
    "note": 31,
    "time": 97856,
    "velocity": 70
  },
  {
    "note": 43,
    "time": 97856,
    "velocity": 71
  },
  {
    "note": 70,
    "time": 97914,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 97920,
    "velocity": 72
  },
  {
    "note": 67,
    "time": 97959,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 97972,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 97972,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 97984,
    "velocity": 74
  },
  {
    "note": 36,
    "time": 97984,
    "velocity": 92
  },
  {
    "note": 48,
    "time": 97984,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 98042,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 98048,
    "velocity": 83
  },
  {
    "note": 36,
    "time": 98100,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 98100,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 98106,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 98112,
    "velocity": 86
  },
  {
    "note": 33,
    "time": 98112,
    "velocity": 75
  },
  {
    "note": 45,
    "time": 98112,
    "velocity": 74
  },
  {
    "note": 72,
    "time": 98170,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 98176,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 98190,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 98215,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 98228,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 98228,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 98234,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 98240,
    "velocity": 77
  },
  {
    "note": 78,
    "time": 98240,
    "velocity": 79
  },
  {
    "note": 75,
    "time": 98240,
    "velocity": 111
  },
  {
    "note": 38,
    "time": 98240,
    "velocity": 94
  },
  {
    "note": 50,
    "time": 98240,
    "velocity": 95
  },
  {
    "note": 75,
    "time": 98298,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 98304,
    "velocity": 75
  },
  {
    "note": 38,
    "time": 98356,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 98356,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 98362,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 98368,
    "velocity": 73
  },
  {
    "note": 26,
    "time": 98368,
    "velocity": 61
  },
  {
    "note": 38,
    "time": 98368,
    "velocity": 60
  },
  {
    "note": 72,
    "time": 98426,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 98432,
    "velocity": 83
  },
  {
    "note": 66,
    "time": 98471,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 98471,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 98484,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 98484,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 98490,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 98496,
    "velocity": 86
  },
  {
    "note": 67,
    "time": 98496,
    "velocity": 73
  },
  {
    "note": 70,
    "time": 98496,
    "velocity": 74
  },
  {
    "note": 31,
    "time": 98496,
    "velocity": 75
  },
  {
    "note": 43,
    "time": 98496,
    "velocity": 75
  },
  {
    "note": 70,
    "time": 98554,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 98560,
    "velocity": 83
  },
  {
    "note": 79,
    "time": 98612,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 98612,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 98618,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 98624,
    "velocity": 59
  },
  {
    "note": 69,
    "time": 98624,
    "velocity": 72
  },
  {
    "note": 69,
    "time": 98682,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 98688,
    "velocity": 82
  },
  {
    "note": 31,
    "time": 98727,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 98727,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 98740,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 98746,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 98752,
    "velocity": 84
  },
  {
    "note": 67,
    "time": 98752,
    "velocity": 75
  },
  {
    "note": 58,
    "time": 98810,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 98816,
    "velocity": 99
  },
  {
    "note": 67,
    "time": 98868,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 98874,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 98880,
    "velocity": 77
  },
  {
    "note": 59,
    "time": 98880,
    "velocity": 88
  },
  {
    "note": 71,
    "time": 98880,
    "velocity": 87
  },
  {
    "note": 31,
    "time": 98880,
    "velocity": 70
  },
  {
    "note": 43,
    "time": 98880,
    "velocity": 69
  },
  {
    "note": 67,
    "time": 98938,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 98944,
    "velocity": 76
  },
  {
    "note": 59,
    "time": 98996,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 98996,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 98996,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 98996,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 99002,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 99008,
    "velocity": 73
  },
  {
    "note": 72,
    "time": 99008,
    "velocity": 73
  },
  {
    "note": 63,
    "time": 99008,
    "velocity": 79
  },
  {
    "note": 36,
    "time": 99008,
    "velocity": 88
  },
  {
    "note": 48,
    "time": 99008,
    "velocity": 88
  },
  {
    "note": 60,
    "time": 99066,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 99066,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 99066,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 99072,
    "velocity": 84
  },
  {
    "note": 75,
    "time": 99072,
    "velocity": 100
  },
  {
    "note": 63,
    "time": 99072,
    "velocity": 72
  },
  {
    "note": 63,
    "time": 99072,
    "velocity": 69
  },
  {
    "note": 75,
    "time": 99130,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 99130,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 99136,
    "velocity": 87
  },
  {
    "note": 65,
    "time": 99136,
    "velocity": 85
  },
  {
    "note": 77,
    "time": 99194,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 99194,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 99200,
    "velocity": 83
  },
  {
    "note": 67,
    "time": 99200,
    "velocity": 83
  },
  {
    "note": 75,
    "time": 99245,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 99245,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 99258,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 99258,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 99264,
    "velocity": 111
  },
  {
    "note": 74,
    "time": 99264,
    "velocity": 82
  },
  {
    "note": 68,
    "time": 99264,
    "velocity": 114
  },
  {
    "note": 62,
    "time": 99264,
    "velocity": 76
  },
  {
    "note": 80,
    "time": 99322,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 99322,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 99328,
    "velocity": 75
  },
  {
    "note": 67,
    "time": 99328,
    "velocity": 76
  },
  {
    "note": 36,
    "time": 99354,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 99354,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 99380,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 99386,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 99386,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 99392,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 99392,
    "velocity": 80
  },
  {
    "note": 35,
    "time": 99392,
    "velocity": 75
  },
  {
    "note": 47,
    "time": 99392,
    "velocity": 78
  },
  {
    "note": 77,
    "time": 99450,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 99450,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 99456,
    "velocity": 82
  },
  {
    "note": 67,
    "time": 99456,
    "velocity": 63
  },
  {
    "note": 62,
    "time": 99495,
    "velocity": 0
  },
  {
    "note": 35,
    "time": 99508,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 99508,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 99514,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 99520,
    "velocity": 76
  },
  {
    "note": 36,
    "time": 99520,
    "velocity": 87
  },
  {
    "note": 48,
    "time": 99520,
    "velocity": 86
  },
  {
    "note": 75,
    "time": 99578,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 99584,
    "velocity": 83
  },
  {
    "note": 36,
    "time": 99636,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 99636,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 99642,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 99648,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 99648,
    "velocity": 103
  },
  {
    "note": 74,
    "time": 99706,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 99712,
    "velocity": 84
  },
  {
    "note": 67,
    "time": 99751,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 99764,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 99770,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 99776,
    "velocity": 76
  },
  {
    "note": 63,
    "time": 99776,
    "velocity": 88
  },
  {
    "note": 63,
    "time": 99834,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 99840,
    "velocity": 88
  },
  {
    "note": 72,
    "time": 99892,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 99898,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 99904,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 99904,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 99962,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 99968,
    "velocity": 85
  },
  {
    "note": 70,
    "time": 100020,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 100026,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 100032,
    "velocity": 77
  },
  {
    "note": 60,
    "time": 100032,
    "velocity": 76
  },
  {
    "note": 60,
    "time": 100090,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 100096,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 100148,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 100154,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 100160,
    "velocity": 102
  },
  {
    "note": 82,
    "time": 100160,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 100160,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 100218,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 100224,
    "velocity": 85
  },
  {
    "note": 65,
    "time": 100282,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 100288,
    "velocity": 90
  },
  {
    "note": 67,
    "time": 100346,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 100352,
    "velocity": 73
  },
  {
    "note": 70,
    "time": 100391,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 100391,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 100410,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 100416,
    "velocity": 81
  },
  {
    "note": 81,
    "time": 100416,
    "velocity": 81
  },
  {
    "note": 63,
    "time": 100416,
    "velocity": 75
  },
  {
    "note": 63,
    "time": 100474,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 100480,
    "velocity": 86
  },
  {
    "note": 65,
    "time": 100538,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 100544,
    "velocity": 78
  },
  {
    "note": 62,
    "time": 100602,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 100608,
    "velocity": 70
  },
  {
    "note": 69,
    "time": 100660,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 100660,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 100666,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 100672,
    "velocity": 73
  },
  {
    "note": 79,
    "time": 100672,
    "velocity": 74
  },
  {
    "note": 63,
    "time": 100672,
    "velocity": 91
  },
  {
    "note": 63,
    "time": 100730,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 100736,
    "velocity": 78
  },
  {
    "note": 62,
    "time": 100794,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 100800,
    "velocity": 78
  },
  {
    "note": 61,
    "time": 100858,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 100864,
    "velocity": 70
  },
  {
    "note": 67,
    "time": 100903,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 100903,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 100922,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 100928,
    "velocity": 75
  },
  {
    "note": 78,
    "time": 100928,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 100928,
    "velocity": 90
  },
  {
    "note": 62,
    "time": 100986,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 100992,
    "velocity": 75
  },
  {
    "note": 66,
    "time": 101044,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 101044,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 101050,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 101056,
    "velocity": 79
  },
  {
    "note": 77,
    "time": 101056,
    "velocity": 78
  },
  {
    "note": 59,
    "time": 101056,
    "velocity": 80
  },
  {
    "note": 59,
    "time": 101114,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 101120,
    "velocity": 68
  },
  {
    "note": 65,
    "time": 101172,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 101172,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 101178,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 101184,
    "velocity": 75
  },
  {
    "note": 76,
    "time": 101184,
    "velocity": 73
  },
  {
    "note": 60,
    "time": 101184,
    "velocity": 89
  },
  {
    "note": 60,
    "time": 101242,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 101248,
    "velocity": 76
  },
  {
    "note": 58,
    "time": 101306,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 101312,
    "velocity": 76
  },
  {
    "note": 57,
    "time": 101370,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 101376,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 101415,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 101415,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 101434,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 101440,
    "velocity": 75
  },
  {
    "note": 58,
    "time": 101440,
    "velocity": 87
  },
  {
    "note": 74,
    "time": 101498,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 101498,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 101504,
    "velocity": 95
  },
  {
    "note": 82,
    "time": 101504,
    "velocity": 96
  },
  {
    "note": 62,
    "time": 101504,
    "velocity": 88
  },
  {
    "note": 70,
    "time": 101562,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 101562,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 101562,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 101568,
    "velocity": 79
  },
  {
    "note": 69,
    "time": 101568,
    "velocity": 76
  },
  {
    "note": 60,
    "time": 101568,
    "velocity": 78
  },
  {
    "note": 81,
    "time": 101626,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 101626,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 101632,
    "velocity": 82
  },
  {
    "note": 62,
    "time": 101632,
    "velocity": 83
  },
  {
    "note": 82,
    "time": 101690,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 101690,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 101696,
    "velocity": 77
  },
  {
    "note": 60,
    "time": 101696,
    "velocity": 74
  },
  {
    "note": 69,
    "time": 101741,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 101754,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 101754,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 101760,
    "velocity": 73
  },
  {
    "note": 67,
    "time": 101760,
    "velocity": 73
  },
  {
    "note": 58,
    "time": 101760,
    "velocity": 72
  },
  {
    "note": 79,
    "time": 101818,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 101818,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 101818,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 101824,
    "velocity": 79
  },
  {
    "note": 66,
    "time": 101824,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 101824,
    "velocity": 77
  },
  {
    "note": 78,
    "time": 101882,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 101882,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 101888,
    "velocity": 95
  },
  {
    "note": 87,
    "time": 101888,
    "velocity": 96
  },
  {
    "note": 60,
    "time": 101888,
    "velocity": 87
  },
  {
    "note": 75,
    "time": 101946,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 101946,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 101946,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 101952,
    "velocity": 79
  },
  {
    "note": 86,
    "time": 101952,
    "velocity": 78
  },
  {
    "note": 58,
    "time": 101952,
    "velocity": 75
  },
  {
    "note": 74,
    "time": 102010,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 102010,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 102010,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 102016,
    "velocity": 76
  },
  {
    "note": 84,
    "time": 102016,
    "velocity": 77
  },
  {
    "note": 57,
    "time": 102016,
    "velocity": 74
  },
  {
    "note": 66,
    "time": 102055,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 102074,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 102074,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 102074,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 102080,
    "velocity": 79
  },
  {
    "note": 82,
    "time": 102080,
    "velocity": 77
  },
  {
    "note": 67,
    "time": 102080,
    "velocity": 85
  },
  {
    "note": 55,
    "time": 102080,
    "velocity": 76
  },
  {
    "note": 70,
    "time": 102138,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 102138,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 102138,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 102138,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 102144,
    "velocity": 99
  },
  {
    "note": 93,
    "time": 102144,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 102144,
    "velocity": 85
  },
  {
    "note": 60,
    "time": 102144,
    "velocity": 91
  },
  {
    "note": 84,
    "time": 102202,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 102202,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 102202,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 102202,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 102208,
    "velocity": 79
  },
  {
    "note": 91,
    "time": 102208,
    "velocity": 78
  },
  {
    "note": 67,
    "time": 102208,
    "velocity": 73
  },
  {
    "note": 58,
    "time": 102208,
    "velocity": 74
  },
  {
    "note": 82,
    "time": 102266,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 102266,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 102266,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 102266,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 102272,
    "velocity": 77
  },
  {
    "note": 90,
    "time": 102272,
    "velocity": 76
  },
  {
    "note": 66,
    "time": 102272,
    "velocity": 74
  },
  {
    "note": 57,
    "time": 102272,
    "velocity": 75
  },
  {
    "note": 81,
    "time": 102330,
    "velocity": 0
  },
  {
    "note": 90,
    "time": 102330,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 102330,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 102330,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 102336,
    "velocity": 87
  },
  {
    "note": 82,
    "time": 102336,
    "velocity": 73
  },
  {
    "note": 67,
    "time": 102336,
    "velocity": 83
  },
  {
    "note": 58,
    "time": 102336,
    "velocity": 87
  },
  {
    "note": 82,
    "time": 102394,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 102394,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 102400,
    "velocity": 74
  },
  {
    "note": 60,
    "time": 102400,
    "velocity": 86
  },
  {
    "note": 81,
    "time": 102458,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 102458,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 102464,
    "velocity": 73
  },
  {
    "note": 58,
    "time": 102464,
    "velocity": 77
  },
  {
    "note": 91,
    "time": 102509,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 102522,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 102522,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 102528,
    "velocity": 75
  },
  {
    "note": 77,
    "time": 102528,
    "velocity": 75
  },
  {
    "note": 57,
    "time": 102528,
    "velocity": 74
  },
  {
    "note": 89,
    "time": 102586,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 102586,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 102586,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 102592,
    "velocity": 77
  },
  {
    "note": 75,
    "time": 102592,
    "velocity": 76
  },
  {
    "note": 55,
    "time": 102592,
    "velocity": 77
  },
  {
    "note": 75,
    "time": 102650,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 102650,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 102656,
    "velocity": 84
  },
  {
    "note": 57,
    "time": 102656,
    "velocity": 85
  },
  {
    "note": 87,
    "time": 102708,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 102708,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 102714,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 102714,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 102720,
    "velocity": 75
  },
  {
    "note": 74,
    "time": 102720,
    "velocity": 72
  },
  {
    "note": 65,
    "time": 102720,
    "velocity": 74
  },
  {
    "note": 53,
    "time": 102720,
    "velocity": 70
  },
  {
    "note": 74,
    "time": 102778,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 102778,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 102784,
    "velocity": 82
  },
  {
    "note": 55,
    "time": 102784,
    "velocity": 82
  },
  {
    "note": 86,
    "time": 102836,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 102836,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 102842,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 102842,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 102848,
    "velocity": 76
  },
  {
    "note": 85,
    "time": 102848,
    "velocity": 74
  },
  {
    "note": 52,
    "time": 102848,
    "velocity": 74
  },
  {
    "note": 64,
    "time": 102848,
    "velocity": 76
  },
  {
    "note": 53,
    "time": 102848,
    "velocity": 79
  },
  {
    "note": 53,
    "time": 102906,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 102912,
    "velocity": 70
  },
  {
    "note": 58,
    "time": 102912,
    "velocity": 87
  },
  {
    "note": 82,
    "time": 102970,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 102970,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 102976,
    "velocity": 73
  },
  {
    "note": 57,
    "time": 102976,
    "velocity": 75
  },
  {
    "note": 81,
    "time": 103034,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 103034,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 103040,
    "velocity": 68
  },
  {
    "note": 55,
    "time": 103040,
    "velocity": 69
  },
  {
    "note": 73,
    "time": 103079,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 103079,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 103079,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 103079,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 103098,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 103098,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 103104,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 103104,
    "velocity": 77
  },
  {
    "note": 81,
    "time": 103104,
    "velocity": 80
  },
  {
    "note": 54,
    "time": 103104,
    "velocity": 77
  },
  {
    "note": 66,
    "time": 103104,
    "velocity": 78
  },
  {
    "note": 57,
    "time": 103104,
    "velocity": 82
  },
  {
    "note": 57,
    "time": 103162,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 103168,
    "velocity": 83
  },
  {
    "note": 63,
    "time": 103226,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 103232,
    "velocity": 68
  },
  {
    "note": 62,
    "time": 103290,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 103296,
    "velocity": 65
  },
  {
    "note": 86,
    "time": 103335,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 103335,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 103335,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 103335,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 103335,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 103354,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 103360,
    "velocity": 63
  },
  {
    "note": 84,
    "time": 103360,
    "velocity": 62
  },
  {
    "note": 78,
    "time": 103360,
    "velocity": 62
  },
  {
    "note": 50,
    "time": 103360,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 103360,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 103360,
    "velocity": 73
  },
  {
    "note": 62,
    "time": 103418,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 103424,
    "velocity": 63
  },
  {
    "note": 60,
    "time": 103482,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 103488,
    "velocity": 60
  },
  {
    "note": 58,
    "time": 103546,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 103552,
    "velocity": 57
  },
  {
    "note": 72,
    "time": 103591,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 103591,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 103591,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 103591,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 103591,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 103610,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 103616,
    "velocity": 63
  },
  {
    "note": 82,
    "time": 103616,
    "velocity": 61
  },
  {
    "note": 79,
    "time": 103616,
    "velocity": 70
  },
  {
    "note": 67,
    "time": 103616,
    "velocity": 72
  },
  {
    "note": 55,
    "time": 103616,
    "velocity": 61
  },
  {
    "note": 79,
    "time": 103674,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 103674,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 103680,
    "velocity": 57
  },
  {
    "note": 65,
    "time": 103680,
    "velocity": 60
  },
  {
    "note": 77,
    "time": 103738,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 103738,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 103744,
    "velocity": 57
  },
  {
    "note": 63,
    "time": 103744,
    "velocity": 58
  },
  {
    "note": 75,
    "time": 103802,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 103802,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 103808,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 103808,
    "velocity": 57
  },
  {
    "note": 70,
    "time": 103847,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 103847,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 103847,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 103866,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 103866,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 103872,
    "velocity": 61
  },
  {
    "note": 81,
    "time": 103872,
    "velocity": 62
  },
  {
    "note": 73,
    "time": 103872,
    "velocity": 60
  },
  {
    "note": 61,
    "time": 103872,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 103872,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 103930,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 103936,
    "velocity": 67
  },
  {
    "note": 69,
    "time": 103988,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 103988,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 103988,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 103994,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 104000,
    "velocity": 68
  },
  {
    "note": 76,
    "time": 104000,
    "velocity": 69
  },
  {
    "note": 85,
    "time": 104000,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 104000,
    "velocity": 61
  },
  {
    "note": 57,
    "time": 104058,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 104064,
    "velocity": 60
  },
  {
    "note": 73,
    "time": 104103,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 104116,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 104116,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 104116,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 104122,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 104128,
    "velocity": 69
  },
  {
    "note": 77,
    "time": 104128,
    "velocity": 71
  },
  {
    "note": 86,
    "time": 104128,
    "velocity": 70
  },
  {
    "note": 53,
    "time": 104128,
    "velocity": 62
  },
  {
    "note": 53,
    "time": 104186,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 104192,
    "velocity": 64
  },
  {
    "note": 74,
    "time": 104244,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 104244,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 104244,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 104250,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 104256,
    "velocity": 65
  },
  {
    "note": 79,
    "time": 104256,
    "velocity": 66
  },
  {
    "note": 88,
    "time": 104256,
    "velocity": 68
  },
  {
    "note": 52,
    "time": 104256,
    "velocity": 58
  },
  {
    "note": 52,
    "time": 104314,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 104320,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 104372,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 104372,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 104372,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 104378,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 104384,
    "velocity": 64
  },
  {
    "note": 89,
    "time": 104384,
    "velocity": 67
  },
  {
    "note": 81,
    "time": 104384,
    "velocity": 57
  },
  {
    "note": 50,
    "time": 104384,
    "velocity": 57
  },
  {
    "note": 81,
    "time": 104442,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 104448,
    "velocity": 57
  },
  {
    "note": 79,
    "time": 104506,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 104512,
    "velocity": 66
  },
  {
    "note": 81,
    "time": 104570,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 104576,
    "velocity": 57
  },
  {
    "note": 77,
    "time": 104615,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 104615,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 104615,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 104634,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 104640,
    "velocity": 65
  },
  {
    "note": 79,
    "time": 104640,
    "velocity": 66
  },
  {
    "note": 86,
    "time": 104640,
    "velocity": 58
  },
  {
    "note": 76,
    "time": 104640,
    "velocity": 59
  },
  {
    "note": 67,
    "time": 104640,
    "velocity": 82
  },
  {
    "note": 74,
    "time": 104640,
    "velocity": 59
  },
  {
    "note": 79,
    "time": 104698,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 104698,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 104704,
    "velocity": 66
  },
  {
    "note": 69,
    "time": 104704,
    "velocity": 70
  },
  {
    "note": 81,
    "time": 104762,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 104762,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 104768,
    "velocity": 58
  },
  {
    "note": 67,
    "time": 104768,
    "velocity": 60
  },
  {
    "note": 79,
    "time": 104826,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 104826,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 104832,
    "velocity": 65
  },
  {
    "note": 69,
    "time": 104832,
    "velocity": 65
  },
  {
    "note": 86,
    "time": 104871,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 104871,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 104890,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 104890,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 104896,
    "velocity": 70
  },
  {
    "note": 85,
    "time": 104896,
    "velocity": 61
  },
  {
    "note": 70,
    "time": 104896,
    "velocity": 69
  },
  {
    "note": 73,
    "time": 104896,
    "velocity": 57
  },
  {
    "note": 82,
    "time": 104954,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 104954,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 104960,
    "velocity": 60
  },
  {
    "note": 69,
    "time": 104960,
    "velocity": 60
  },
  {
    "note": 81,
    "time": 105018,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 105018,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 105024,
    "velocity": 59
  },
  {
    "note": 67,
    "time": 105024,
    "velocity": 59
  },
  {
    "note": 79,
    "time": 105082,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 105082,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 105088,
    "velocity": 65
  },
  {
    "note": 69,
    "time": 105088,
    "velocity": 64
  },
  {
    "note": 88,
    "time": 105102,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 105102,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 105127,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 105127,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 105146,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 105146,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 105152,
    "velocity": 58
  },
  {
    "note": 81,
    "time": 105152,
    "velocity": 66
  },
  {
    "note": 65,
    "time": 105152,
    "velocity": 59
  },
  {
    "note": 81,
    "time": 105210,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 105210,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 105216,
    "velocity": 66
  },
  {
    "note": 67,
    "time": 105216,
    "velocity": 64
  },
  {
    "note": 82,
    "time": 105274,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 105274,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 105280,
    "velocity": 58
  },
  {
    "note": 64,
    "time": 105280,
    "velocity": 58
  },
  {
    "note": 79,
    "time": 105338,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 105338,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 105344,
    "velocity": 66
  },
  {
    "note": 65,
    "time": 105344,
    "velocity": 65
  },
  {
    "note": 81,
    "time": 105402,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 105402,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 105408,
    "velocity": 58
  },
  {
    "note": 62,
    "time": 105408,
    "velocity": 60
  },
  {
    "note": 62,
    "time": 105466,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 105472,
    "velocity": 67
  },
  {
    "note": 64,
    "time": 105472,
    "velocity": 66
  },
  {
    "note": 86,
    "time": 105498,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 105524,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 105530,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 105530,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 105536,
    "velocity": 67
  },
  {
    "note": 58,
    "time": 105536,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 105536,
    "velocity": 58
  },
  {
    "note": 58,
    "time": 105594,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 105594,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 105600,
    "velocity": 58
  },
  {
    "note": 60,
    "time": 105600,
    "velocity": 57
  },
  {
    "note": 89,
    "time": 105652,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 105658,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 105658,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 105664,
    "velocity": 70
  },
  {
    "note": 91,
    "time": 105664,
    "velocity": 72
  },
  {
    "note": 58,
    "time": 105664,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 105664,
    "velocity": 70
  },
  {
    "note": 58,
    "time": 105722,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 105722,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 105728,
    "velocity": 58
  },
  {
    "note": 60,
    "time": 105728,
    "velocity": 57
  },
  {
    "note": 79,
    "time": 105780,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 105780,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 105786,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 105786,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 105792,
    "velocity": 56
  },
  {
    "note": 86,
    "time": 105792,
    "velocity": 57
  },
  {
    "note": 55,
    "time": 105792,
    "velocity": 60
  },
  {
    "note": 58,
    "time": 105792,
    "velocity": 59
  },
  {
    "note": 55,
    "time": 105850,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 105850,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 105856,
    "velocity": 59
  },
  {
    "note": 57,
    "time": 105856,
    "velocity": 59
  },
  {
    "note": 81,
    "time": 105908,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 105908,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 105914,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 105914,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 105920,
    "velocity": 62
  },
  {
    "note": 85,
    "time": 105920,
    "velocity": 62
  },
  {
    "note": 52,
    "time": 105920,
    "velocity": 60
  },
  {
    "note": 55,
    "time": 105920,
    "velocity": 61
  },
  {
    "note": 52,
    "time": 105978,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 105978,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 105984,
    "velocity": 65
  },
  {
    "note": 57,
    "time": 105984,
    "velocity": 65
  },
  {
    "note": 79,
    "time": 106036,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 106036,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 106042,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106042,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 106048,
    "velocity": 63
  },
  {
    "note": 86,
    "time": 106048,
    "velocity": 66
  },
  {
    "note": 52,
    "time": 106048,
    "velocity": 60
  },
  {
    "note": 55,
    "time": 106048,
    "velocity": 58
  },
  {
    "note": 52,
    "time": 106106,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 106106,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 106112,
    "velocity": 59
  },
  {
    "note": 53,
    "time": 106112,
    "velocity": 56
  },
  {
    "note": 77,
    "time": 106164,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 106164,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 106170,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 106170,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 106176,
    "velocity": 68
  },
  {
    "note": 79,
    "time": 106176,
    "velocity": 71
  },
  {
    "note": 88,
    "time": 106176,
    "velocity": 68
  },
  {
    "note": 49,
    "time": 106176,
    "velocity": 62
  },
  {
    "note": 52,
    "time": 106176,
    "velocity": 62
  },
  {
    "note": 49,
    "time": 106234,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 106234,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106240,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 106240,
    "velocity": 68
  },
  {
    "note": 76,
    "time": 106292,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 106292,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 106292,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106298,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106298,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 106304,
    "velocity": 58
  },
  {
    "note": 77,
    "time": 106304,
    "velocity": 59
  },
  {
    "note": 86,
    "time": 106304,
    "velocity": 58
  },
  {
    "note": 50,
    "time": 106304,
    "velocity": 58
  },
  {
    "note": 53,
    "time": 106304,
    "velocity": 57
  },
  {
    "note": 50,
    "time": 106362,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 106362,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106368,
    "velocity": 67
  },
  {
    "note": 57,
    "time": 106368,
    "velocity": 70
  },
  {
    "note": 74,
    "time": 106420,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 106420,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 106420,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106426,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106426,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 106432,
    "velocity": 63
  },
  {
    "note": 76,
    "time": 106432,
    "velocity": 61
  },
  {
    "note": 85,
    "time": 106432,
    "velocity": 63
  },
  {
    "note": 52,
    "time": 106432,
    "velocity": 61
  },
  {
    "note": 55,
    "time": 106432,
    "velocity": 64
  },
  {
    "note": 52,
    "time": 106490,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 106490,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106496,
    "velocity": 66
  },
  {
    "note": 57,
    "time": 106496,
    "velocity": 66
  },
  {
    "note": 73,
    "time": 106548,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 106548,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 106548,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106554,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106554,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 106560,
    "velocity": 66
  },
  {
    "note": 81,
    "time": 106560,
    "velocity": 64
  },
  {
    "note": 86,
    "time": 106560,
    "velocity": 64
  },
  {
    "note": 50,
    "time": 106560,
    "velocity": 55
  },
  {
    "note": 53,
    "time": 106560,
    "velocity": 54
  },
  {
    "note": 50,
    "time": 106618,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 106618,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106624,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 106624,
    "velocity": 66
  },
  {
    "note": 74,
    "time": 106676,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 106676,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 106676,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106682,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106682,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 106688,
    "velocity": 70
  },
  {
    "note": 82,
    "time": 106688,
    "velocity": 68
  },
  {
    "note": 88,
    "time": 106688,
    "velocity": 71
  },
  {
    "note": 55,
    "time": 106688,
    "velocity": 68
  },
  {
    "note": 58,
    "time": 106688,
    "velocity": 71
  },
  {
    "note": 55,
    "time": 106746,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 106746,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106752,
    "velocity": 61
  },
  {
    "note": 57,
    "time": 106752,
    "velocity": 59
  },
  {
    "note": 76,
    "time": 106804,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 106804,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 106804,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106810,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106810,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 106816,
    "velocity": 58
  },
  {
    "note": 81,
    "time": 106816,
    "velocity": 59
  },
  {
    "note": 86,
    "time": 106816,
    "velocity": 60
  },
  {
    "note": 53,
    "time": 106816,
    "velocity": 62
  },
  {
    "note": 57,
    "time": 106816,
    "velocity": 64
  },
  {
    "note": 53,
    "time": 106874,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106874,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106880,
    "velocity": 62
  },
  {
    "note": 57,
    "time": 106880,
    "velocity": 64
  },
  {
    "note": 74,
    "time": 106932,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 106932,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 106932,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 106938,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 106938,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 106944,
    "velocity": 61
  },
  {
    "note": 79,
    "time": 106944,
    "velocity": 61
  },
  {
    "note": 85,
    "time": 106944,
    "velocity": 60
  },
  {
    "note": 52,
    "time": 106944,
    "velocity": 63
  },
  {
    "note": 55,
    "time": 106944,
    "velocity": 62
  },
  {
    "note": 52,
    "time": 107002,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 107002,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 107008,
    "velocity": 66
  },
  {
    "note": 57,
    "time": 107008,
    "velocity": 64
  },
  {
    "note": 73,
    "time": 107060,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 107060,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 107060,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 107066,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107066,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 107072,
    "velocity": 64
  },
  {
    "note": 77,
    "time": 107072,
    "velocity": 64
  },
  {
    "note": 86,
    "time": 107072,
    "velocity": 63
  },
  {
    "note": 50,
    "time": 107072,
    "velocity": 56
  },
  {
    "note": 53,
    "time": 107072,
    "velocity": 57
  },
  {
    "note": 50,
    "time": 107130,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 107130,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 107136,
    "velocity": 68
  },
  {
    "note": 57,
    "time": 107136,
    "velocity": 68
  },
  {
    "note": 74,
    "time": 107188,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 107188,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 107188,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 107194,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107194,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 107200,
    "velocity": 68
  },
  {
    "note": 81,
    "time": 107200,
    "velocity": 69
  },
  {
    "note": 88,
    "time": 107200,
    "velocity": 69
  },
  {
    "note": 49,
    "time": 107200,
    "velocity": 56
  },
  {
    "note": 52,
    "time": 107200,
    "velocity": 57
  },
  {
    "note": 49,
    "time": 107258,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 107258,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107264,
    "velocity": 69
  },
  {
    "note": 76,
    "time": 107316,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 107316,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 107316,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107322,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 107328,
    "velocity": 69
  },
  {
    "note": 88,
    "time": 107328,
    "velocity": 69
  },
  {
    "note": 91,
    "time": 107328,
    "velocity": 69
  },
  {
    "note": 45,
    "time": 107328,
    "velocity": 47
  },
  {
    "note": 45,
    "time": 107386,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107392,
    "velocity": 76
  },
  {
    "note": 79,
    "time": 107444,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 107444,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 107444,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107450,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 107456,
    "velocity": 64
  },
  {
    "note": 86,
    "time": 107456,
    "velocity": 63
  },
  {
    "note": 89,
    "time": 107456,
    "velocity": 64
  },
  {
    "note": 50,
    "time": 107456,
    "velocity": 77
  },
  {
    "note": 53,
    "time": 107456,
    "velocity": 77
  },
  {
    "note": 62,
    "time": 107456,
    "velocity": 78
  },
  {
    "note": 50,
    "time": 107514,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 107514,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 107514,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107520,
    "velocity": 56
  },
  {
    "note": 77,
    "time": 107572,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 107572,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 107572,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107578,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 107584,
    "velocity": 56
  },
  {
    "note": 81,
    "time": 107584,
    "velocity": 57
  },
  {
    "note": 86,
    "time": 107584,
    "velocity": 56
  },
  {
    "note": 53,
    "time": 107584,
    "velocity": 74
  },
  {
    "note": 57,
    "time": 107584,
    "velocity": 73
  },
  {
    "note": 65,
    "time": 107584,
    "velocity": 76
  },
  {
    "note": 53,
    "time": 107642,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 107642,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 107642,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 107648,
    "velocity": 59
  },
  {
    "note": 74,
    "time": 107700,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 107700,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 107700,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 107706,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 107712,
    "velocity": 57
  },
  {
    "note": 79,
    "time": 107712,
    "velocity": 58
  },
  {
    "note": 82,
    "time": 107712,
    "velocity": 57
  },
  {
    "note": 55,
    "time": 107712,
    "velocity": 74
  },
  {
    "note": 58,
    "time": 107712,
    "velocity": 74
  },
  {
    "note": 67,
    "time": 107712,
    "velocity": 75
  },
  {
    "note": 55,
    "time": 107770,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 107770,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 107770,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 107776,
    "velocity": 57
  },
  {
    "note": 70,
    "time": 107828,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 107828,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 107828,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 107834,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 107840,
    "velocity": 70
  },
  {
    "note": 79,
    "time": 107840,
    "velocity": 73
  },
  {
    "note": 88,
    "time": 107840,
    "velocity": 71
  },
  {
    "note": 52,
    "time": 107840,
    "velocity": 66
  },
  {
    "note": 55,
    "time": 107840,
    "velocity": 66
  },
  {
    "note": 64,
    "time": 107840,
    "velocity": 65
  },
  {
    "note": 52,
    "time": 107898,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 107898,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 107898,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 107904,
    "velocity": 59
  },
  {
    "note": 76,
    "time": 107956,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 107956,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 107956,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 107962,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 107968,
    "velocity": 63
  },
  {
    "note": 81,
    "time": 107968,
    "velocity": 62
  },
  {
    "note": 86,
    "time": 107968,
    "velocity": 64
  },
  {
    "note": 53,
    "time": 107968,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 107968,
    "velocity": 70
  },
  {
    "note": 65,
    "time": 107968,
    "velocity": 73
  },
  {
    "note": 53,
    "time": 108026,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 108026,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 108026,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 108032,
    "velocity": 60
  },
  {
    "note": 74,
    "time": 108084,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108084,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 108084,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 108090,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 108096,
    "velocity": 65
  },
  {
    "note": 77,
    "time": 108096,
    "velocity": 64
  },
  {
    "note": 86,
    "time": 108096,
    "velocity": 63
  },
  {
    "note": 50,
    "time": 108096,
    "velocity": 47
  },
  {
    "note": 50,
    "time": 108154,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 108160,
    "velocity": 75
  },
  {
    "note": 74,
    "time": 108212,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 108212,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 108212,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 108218,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 108224,
    "velocity": 58
  },
  {
    "note": 85,
    "time": 108224,
    "velocity": 62
  },
  {
    "note": 76,
    "time": 108224,
    "velocity": 59
  },
  {
    "note": 64,
    "time": 108224,
    "velocity": 58
  },
  {
    "note": 57,
    "time": 108224,
    "velocity": 56
  },
  {
    "note": 76,
    "time": 108282,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 108282,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108288,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 108288,
    "velocity": 70
  },
  {
    "note": 81,
    "time": 108346,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 108346,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 108352,
    "velocity": 58
  },
  {
    "note": 67,
    "time": 108352,
    "velocity": 60
  },
  {
    "note": 79,
    "time": 108410,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 108410,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108416,
    "velocity": 64
  },
  {
    "note": 69,
    "time": 108416,
    "velocity": 67
  },
  {
    "note": 73,
    "time": 108455,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 108455,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108474,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 108474,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 108480,
    "velocity": 69
  },
  {
    "note": 86,
    "time": 108480,
    "velocity": 67
  },
  {
    "note": 77,
    "time": 108480,
    "velocity": 59
  },
  {
    "note": 65,
    "time": 108480,
    "velocity": 57
  },
  {
    "note": 77,
    "time": 108538,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 108538,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108544,
    "velocity": 67
  },
  {
    "note": 69,
    "time": 108544,
    "velocity": 69
  },
  {
    "note": 74,
    "time": 108596,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 108596,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108602,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 108602,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 108608,
    "velocity": 66
  },
  {
    "note": 88,
    "time": 108608,
    "velocity": 66
  },
  {
    "note": 76,
    "time": 108608,
    "velocity": 53
  },
  {
    "note": 64,
    "time": 108608,
    "velocity": 54
  },
  {
    "note": 76,
    "time": 108666,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 108666,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108672,
    "velocity": 68
  },
  {
    "note": 69,
    "time": 108672,
    "velocity": 69
  },
  {
    "note": 76,
    "time": 108724,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 108724,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108730,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 108730,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 108736,
    "velocity": 68
  },
  {
    "note": 77,
    "time": 108736,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 108736,
    "velocity": 75
  },
  {
    "note": 74,
    "time": 108736,
    "velocity": 74
  },
  {
    "note": 77,
    "time": 108794,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 108794,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 108794,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108800,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 108800,
    "velocity": 55
  },
  {
    "note": 89,
    "time": 108852,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108858,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 108858,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 108864,
    "velocity": 58
  },
  {
    "note": 76,
    "time": 108864,
    "velocity": 54
  },
  {
    "note": 61,
    "time": 108864,
    "velocity": 68
  },
  {
    "note": 73,
    "time": 108864,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 108922,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 108922,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 108922,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108928,
    "velocity": 68
  },
  {
    "note": 69,
    "time": 108928,
    "velocity": 57
  },
  {
    "note": 88,
    "time": 108980,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 108986,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 108986,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 108992,
    "velocity": 67
  },
  {
    "note": 77,
    "time": 108992,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 108992,
    "velocity": 71
  },
  {
    "note": 74,
    "time": 108992,
    "velocity": 72
  },
  {
    "note": 77,
    "time": 109050,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 109050,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 109050,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109056,
    "velocity": 68
  },
  {
    "note": 69,
    "time": 109056,
    "velocity": 55
  },
  {
    "note": 89,
    "time": 109108,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109114,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109114,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 109120,
    "velocity": 57
  },
  {
    "note": 76,
    "time": 109120,
    "velocity": 55
  },
  {
    "note": 64,
    "time": 109120,
    "velocity": 67
  },
  {
    "note": 73,
    "time": 109120,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 109178,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 109178,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 109178,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109184,
    "velocity": 72
  },
  {
    "note": 69,
    "time": 109184,
    "velocity": 55
  },
  {
    "note": 85,
    "time": 109236,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109242,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109242,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 109248,
    "velocity": 68
  },
  {
    "note": 77,
    "time": 109248,
    "velocity": 60
  },
  {
    "note": 65,
    "time": 109248,
    "velocity": 73
  },
  {
    "note": 74,
    "time": 109248,
    "velocity": 74
  },
  {
    "note": 77,
    "time": 109306,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 109306,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 109306,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109312,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 109312,
    "velocity": 55
  },
  {
    "note": 86,
    "time": 109364,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 109364,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109370,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109370,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 109376,
    "velocity": 62
  },
  {
    "note": 85,
    "time": 109376,
    "velocity": 59
  },
  {
    "note": 73,
    "time": 109376,
    "velocity": 52
  },
  {
    "note": 69,
    "time": 109376,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 109376,
    "velocity": 63
  },
  {
    "note": 73,
    "time": 109434,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109434,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109440,
    "velocity": 73
  },
  {
    "note": 69,
    "time": 109440,
    "velocity": 62
  },
  {
    "note": 73,
    "time": 109492,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 109492,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109498,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109498,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 109504,
    "velocity": 67
  },
  {
    "note": 83,
    "time": 109504,
    "velocity": 69
  },
  {
    "note": 86,
    "time": 109504,
    "velocity": 69
  },
  {
    "note": 74,
    "time": 109504,
    "velocity": 57
  },
  {
    "note": 59,
    "time": 109504,
    "velocity": 69
  },
  {
    "note": 62,
    "time": 109504,
    "velocity": 68
  },
  {
    "note": 71,
    "time": 109504,
    "velocity": 68
  },
  {
    "note": 74,
    "time": 109562,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 109562,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 109562,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 109562,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109568,
    "velocity": 71
  },
  {
    "note": 69,
    "time": 109568,
    "velocity": 60
  },
  {
    "note": 74,
    "time": 109620,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 109620,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 109620,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109626,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109626,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 109632,
    "velocity": 64
  },
  {
    "note": 85,
    "time": 109632,
    "velocity": 65
  },
  {
    "note": 88,
    "time": 109632,
    "velocity": 65
  },
  {
    "note": 76,
    "time": 109632,
    "velocity": 55
  },
  {
    "note": 61,
    "time": 109632,
    "velocity": 70
  },
  {
    "note": 64,
    "time": 109632,
    "velocity": 68
  },
  {
    "note": 73,
    "time": 109632,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 109690,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 109690,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 109690,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 109690,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109696,
    "velocity": 72
  },
  {
    "note": 69,
    "time": 109696,
    "velocity": 56
  },
  {
    "note": 76,
    "time": 109748,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 109748,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 109748,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109754,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109754,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 109760,
    "velocity": 70
  },
  {
    "note": 86,
    "time": 109760,
    "velocity": 70
  },
  {
    "note": 89,
    "time": 109760,
    "velocity": 68
  },
  {
    "note": 77,
    "time": 109760,
    "velocity": 58
  },
  {
    "note": 62,
    "time": 109760,
    "velocity": 74
  },
  {
    "note": 65,
    "time": 109760,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 109760,
    "velocity": 72
  },
  {
    "note": 77,
    "time": 109818,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 109818,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 109818,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 109818,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109824,
    "velocity": 70
  },
  {
    "note": 69,
    "time": 109824,
    "velocity": 56
  },
  {
    "note": 77,
    "time": 109876,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 109876,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 109876,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109882,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 109882,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 109888,
    "velocity": 61
  },
  {
    "note": 85,
    "time": 109888,
    "velocity": 61
  },
  {
    "note": 88,
    "time": 109888,
    "velocity": 60
  },
  {
    "note": 76,
    "time": 109888,
    "velocity": 56
  },
  {
    "note": 61,
    "time": 109888,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 109888,
    "velocity": 70
  },
  {
    "note": 73,
    "time": 109888,
    "velocity": 69
  },
  {
    "note": 76,
    "time": 109946,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 109946,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 109946,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 109946,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 109952,
    "velocity": 71
  },
  {
    "note": 69,
    "time": 109952,
    "velocity": 58
  },
  {
    "note": 76,
    "time": 110004,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 110004,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 110004,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 110010,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 110010,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 110016,
    "velocity": 67
  },
  {
    "note": 86,
    "time": 110016,
    "velocity": 68
  },
  {
    "note": 89,
    "time": 110016,
    "velocity": 67
  },
  {
    "note": 77,
    "time": 110016,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 110016,
    "velocity": 73
  },
  {
    "note": 65,
    "time": 110016,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 110016,
    "velocity": 73
  },
  {
    "note": 77,
    "time": 110074,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 110074,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 110074,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 110074,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 110080,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 110080,
    "velocity": 53
  },
  {
    "note": 77,
    "time": 110132,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 110132,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 110132,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 110138,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 110138,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 110144,
    "velocity": 67
  },
  {
    "note": 88,
    "time": 110144,
    "velocity": 66
  },
  {
    "note": 91,
    "time": 110144,
    "velocity": 68
  },
  {
    "note": 79,
    "time": 110144,
    "velocity": 61
  },
  {
    "note": 64,
    "time": 110144,
    "velocity": 72
  },
  {
    "note": 67,
    "time": 110144,
    "velocity": 72
  },
  {
    "note": 76,
    "time": 110144,
    "velocity": 74
  },
  {
    "note": 79,
    "time": 110202,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 110202,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 110202,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 110202,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 110208,
    "velocity": 65
  },
  {
    "note": 69,
    "time": 110208,
    "velocity": 53
  },
  {
    "note": 79,
    "time": 110260,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 110260,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 110260,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 110266,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 110266,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 110272,
    "velocity": 70
  },
  {
    "note": 81,
    "time": 110272,
    "velocity": 78
  },
  {
    "note": 89,
    "time": 110272,
    "velocity": 78
  },
  {
    "note": 69,
    "time": 110272,
    "velocity": 64
  },
  {
    "note": 93,
    "time": 110330,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 110330,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 110336,
    "velocity": 65
  },
  {
    "note": 70,
    "time": 110336,
    "velocity": 64
  },
  {
    "note": 81,
    "time": 110388,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 110388,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 110394,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 110394,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 110400,
    "velocity": 57
  },
  {
    "note": 79,
    "time": 110400,
    "velocity": 63
  },
  {
    "note": 88,
    "time": 110400,
    "velocity": 61
  },
  {
    "note": 67,
    "time": 110400,
    "velocity": 57
  },
  {
    "note": 91,
    "time": 110458,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 110458,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 110464,
    "velocity": 67
  },
  {
    "note": 69,
    "time": 110464,
    "velocity": 67
  },
  {
    "note": 79,
    "time": 110516,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 110516,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 110522,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 110522,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 110528,
    "velocity": 57
  },
  {
    "note": 77,
    "time": 110528,
    "velocity": 61
  },
  {
    "note": 86,
    "time": 110528,
    "velocity": 63
  },
  {
    "note": 65,
    "time": 110528,
    "velocity": 61
  },
  {
    "note": 89,
    "time": 110586,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 110586,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 110592,
    "velocity": 66
  },
  {
    "note": 79,
    "time": 110592,
    "velocity": 78
  },
  {
    "note": 77,
    "time": 110644,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 110644,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 110650,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 110650,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 110656,
    "velocity": 58
  },
  {
    "note": 79,
    "time": 110656,
    "velocity": 52
  },
  {
    "note": 76,
    "time": 110656,
    "velocity": 61
  },
  {
    "note": 88,
    "time": 110714,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 110714,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 110720,
    "velocity": 63
  },
  {
    "note": 77,
    "time": 110720,
    "velocity": 64
  },
  {
    "note": 79,
    "time": 110772,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 110778,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 110778,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 110784,
    "velocity": 59
  },
  {
    "note": 77,
    "time": 110784,
    "velocity": 59
  },
  {
    "note": 65,
    "time": 110784,
    "velocity": 61
  },
  {
    "note": 74,
    "time": 110784,
    "velocity": 59
  },
  {
    "note": 77,
    "time": 110842,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 110842,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 110842,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 110848,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 110848,
    "velocity": 55
  },
  {
    "note": 86,
    "time": 110900,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 110906,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 110906,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 110912,
    "velocity": 60
  },
  {
    "note": 76,
    "time": 110912,
    "velocity": 53
  },
  {
    "note": 64,
    "time": 110912,
    "velocity": 69
  },
  {
    "note": 73,
    "time": 110912,
    "velocity": 66
  },
  {
    "note": 76,
    "time": 110970,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 110970,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 110970,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 110976,
    "velocity": 68
  },
  {
    "note": 69,
    "time": 110976,
    "velocity": 58
  },
  {
    "note": 85,
    "time": 111028,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 111034,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111034,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 111040,
    "velocity": 69
  },
  {
    "note": 77,
    "time": 111040,
    "velocity": 64
  },
  {
    "note": 65,
    "time": 111040,
    "velocity": 71
  },
  {
    "note": 74,
    "time": 111040,
    "velocity": 72
  },
  {
    "note": 77,
    "time": 111098,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 111098,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 111098,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111104,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 111104,
    "velocity": 55
  },
  {
    "note": 86,
    "time": 111156,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111162,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111162,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 111168,
    "velocity": 66
  },
  {
    "note": 88,
    "time": 111168,
    "velocity": 66
  },
  {
    "note": 76,
    "time": 111168,
    "velocity": 55
  },
  {
    "note": 61,
    "time": 111168,
    "velocity": 67
  },
  {
    "note": 64,
    "time": 111168,
    "velocity": 69
  },
  {
    "note": 73,
    "time": 111168,
    "velocity": 67
  },
  {
    "note": 76,
    "time": 111226,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 111226,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 111226,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 111226,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111232,
    "velocity": 68
  },
  {
    "note": 69,
    "time": 111232,
    "velocity": 57
  },
  {
    "note": 85,
    "time": 111284,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 111284,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111290,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111290,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 111296,
    "velocity": 71
  },
  {
    "note": 89,
    "time": 111296,
    "velocity": 70
  },
  {
    "note": 77,
    "time": 111296,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 111296,
    "velocity": 74
  },
  {
    "note": 65,
    "time": 111296,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 111296,
    "velocity": 73
  },
  {
    "note": 77,
    "time": 111354,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 111354,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 111354,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 111354,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111360,
    "velocity": 66
  },
  {
    "note": 69,
    "time": 111360,
    "velocity": 55
  },
  {
    "note": 86,
    "time": 111412,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 111412,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111418,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111418,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 111424,
    "velocity": 61
  },
  {
    "note": 88,
    "time": 111424,
    "velocity": 60
  },
  {
    "note": 76,
    "time": 111424,
    "velocity": 54
  },
  {
    "note": 61,
    "time": 111424,
    "velocity": 69
  },
  {
    "note": 64,
    "time": 111424,
    "velocity": 67
  },
  {
    "note": 73,
    "time": 111424,
    "velocity": 68
  },
  {
    "note": 76,
    "time": 111482,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 111482,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 111482,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 111482,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111488,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 111488,
    "velocity": 59
  },
  {
    "note": 85,
    "time": 111540,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 111540,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111546,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111546,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 111552,
    "velocity": 66
  },
  {
    "note": 89,
    "time": 111552,
    "velocity": 70
  },
  {
    "note": 77,
    "time": 111552,
    "velocity": 61
  },
  {
    "note": 62,
    "time": 111552,
    "velocity": 74
  },
  {
    "note": 65,
    "time": 111552,
    "velocity": 71
  },
  {
    "note": 74,
    "time": 111552,
    "velocity": 74
  },
  {
    "note": 77,
    "time": 111610,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 111610,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 111610,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 111610,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111616,
    "velocity": 66
  },
  {
    "note": 69,
    "time": 111616,
    "velocity": 57
  },
  {
    "note": 86,
    "time": 111668,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 111668,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111674,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111674,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 111680,
    "velocity": 67
  },
  {
    "note": 91,
    "time": 111680,
    "velocity": 66
  },
  {
    "note": 79,
    "time": 111680,
    "velocity": 62
  },
  {
    "note": 59,
    "time": 111680,
    "velocity": 64
  },
  {
    "note": 62,
    "time": 111680,
    "velocity": 65
  },
  {
    "note": 71,
    "time": 111680,
    "velocity": 64
  },
  {
    "note": 79,
    "time": 111738,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 111738,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 111738,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 111738,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111744,
    "velocity": 65
  },
  {
    "note": 69,
    "time": 111744,
    "velocity": 58
  },
  {
    "note": 86,
    "time": 111796,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 111796,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111802,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111802,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 111808,
    "velocity": 71
  },
  {
    "note": 93,
    "time": 111808,
    "velocity": 70
  },
  {
    "note": 81,
    "time": 111808,
    "velocity": 65
  },
  {
    "note": 61,
    "time": 111808,
    "velocity": 73
  },
  {
    "note": 64,
    "time": 111808,
    "velocity": 73
  },
  {
    "note": 73,
    "time": 111808,
    "velocity": 71
  },
  {
    "note": 81,
    "time": 111866,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 111866,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 111866,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 111866,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 111866,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111872,
    "velocity": 64
  },
  {
    "note": 57,
    "time": 111872,
    "velocity": 55
  },
  {
    "note": 69,
    "time": 111872,
    "velocity": 58
  },
  {
    "note": 85,
    "time": 111924,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 111924,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 111930,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 111930,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 111930,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 111936,
    "velocity": 56
  },
  {
    "note": 88,
    "time": 111936,
    "velocity": 54
  },
  {
    "note": 76,
    "time": 111936,
    "velocity": 55
  },
  {
    "note": 64,
    "time": 111936,
    "velocity": 57
  },
  {
    "note": 67,
    "time": 111936,
    "velocity": 60
  },
  {
    "note": 76,
    "time": 111994,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 111994,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 111994,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 112000,
    "velocity": 70
  },
  {
    "note": 57,
    "time": 112000,
    "velocity": 66
  },
  {
    "note": 69,
    "time": 112000,
    "velocity": 67
  },
  {
    "note": 79,
    "time": 112052,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 112052,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 112058,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 112058,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 112058,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 112064,
    "velocity": 67
  },
  {
    "note": 89,
    "time": 112064,
    "velocity": 68
  },
  {
    "note": 77,
    "time": 112064,
    "velocity": 58
  },
  {
    "note": 62,
    "time": 112064,
    "velocity": 59
  },
  {
    "note": 65,
    "time": 112064,
    "velocity": 59
  },
  {
    "note": 77,
    "time": 112122,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 112122,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 112122,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 112128,
    "velocity": 69
  },
  {
    "note": 57,
    "time": 112128,
    "velocity": 66
  },
  {
    "note": 69,
    "time": 112128,
    "velocity": 70
  },
  {
    "note": 77,
    "time": 112180,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 112180,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 112186,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 112186,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 112186,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 112192,
    "velocity": 66
  },
  {
    "note": 91,
    "time": 112192,
    "velocity": 67
  },
  {
    "note": 79,
    "time": 112192,
    "velocity": 62
  },
  {
    "note": 62,
    "time": 112192,
    "velocity": 60
  },
  {
    "note": 67,
    "time": 112192,
    "velocity": 60
  },
  {
    "note": 79,
    "time": 112250,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 112250,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 112250,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 112256,
    "velocity": 66
  },
  {
    "note": 57,
    "time": 112256,
    "velocity": 66
  },
  {
    "note": 69,
    "time": 112256,
    "velocity": 67
  },
  {
    "note": 86,
    "time": 112308,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 112308,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 112314,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 112320,
    "velocity": 67
  },
  {
    "note": 85,
    "time": 112320,
    "velocity": 68
  },
  {
    "note": 93,
    "time": 112320,
    "velocity": 66
  },
  {
    "note": 61,
    "time": 112320,
    "velocity": 66
  },
  {
    "note": 64,
    "time": 112320,
    "velocity": 65
  },
  {
    "note": 57,
    "time": 112378,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 112378,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 112378,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 112378,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 112384,
    "velocity": 87
  },
  {
    "note": 57,
    "time": 112384,
    "velocity": 86
  },
  {
    "note": 33,
    "time": 112384,
    "velocity": 85
  },
  {
    "note": 45,
    "time": 112442,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 112442,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 112442,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 112448,
    "velocity": 88
  },
  {
    "note": 31,
    "time": 112448,
    "velocity": 118
  },
  {
    "note": 43,
    "time": 112448,
    "velocity": 119
  },
  {
    "note": 55,
    "time": 112506,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 112506,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 112506,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 112512,
    "velocity": 101
  },
  {
    "note": 57,
    "time": 112512,
    "velocity": 101
  },
  {
    "note": 33,
    "time": 112512,
    "velocity": 76
  },
  {
    "note": 81,
    "time": 112551,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 112551,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 112551,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 112570,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 112570,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 112570,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 112576,
    "velocity": 91
  },
  {
    "note": 29,
    "time": 112576,
    "velocity": 115
  },
  {
    "note": 41,
    "time": 112576,
    "velocity": 114
  },
  {
    "note": 53,
    "time": 112634,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 112634,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 112634,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 112640,
    "velocity": 107
  },
  {
    "note": 57,
    "time": 112640,
    "velocity": 105
  },
  {
    "note": 33,
    "time": 112640,
    "velocity": 78
  },
  {
    "note": 45,
    "time": 112698,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 112698,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 112698,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 112704,
    "velocity": 85
  },
  {
    "note": 28,
    "time": 112704,
    "velocity": 109
  },
  {
    "note": 40,
    "time": 112704,
    "velocity": 111
  },
  {
    "note": 52,
    "time": 112762,
    "velocity": 0
  },
  {
    "note": 28,
    "time": 112762,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 112762,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 112768,
    "velocity": 107
  },
  {
    "note": 57,
    "time": 112768,
    "velocity": 108
  },
  {
    "note": 33,
    "time": 112768,
    "velocity": 81
  },
  {
    "note": 45,
    "time": 112826,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 112826,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 112826,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 112832,
    "velocity": 83
  },
  {
    "note": 26,
    "time": 112832,
    "velocity": 110
  },
  {
    "note": 38,
    "time": 112832,
    "velocity": 110
  },
  {
    "note": 50,
    "time": 112890,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 112890,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 112890,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 112896,
    "velocity": 110
  },
  {
    "note": 57,
    "time": 112896,
    "velocity": 111
  },
  {
    "note": 33,
    "time": 112896,
    "velocity": 84
  },
  {
    "note": 45,
    "time": 112954,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 112954,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 112954,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 112960,
    "velocity": 80
  },
  {
    "note": 25,
    "time": 112960,
    "velocity": 106
  },
  {
    "note": 37,
    "time": 112960,
    "velocity": 105
  },
  {
    "note": 49,
    "time": 113018,
    "velocity": 0
  },
  {
    "note": 25,
    "time": 113018,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 113018,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113024,
    "velocity": 111
  },
  {
    "note": 57,
    "time": 113024,
    "velocity": 110
  },
  {
    "note": 33,
    "time": 113024,
    "velocity": 87
  },
  {
    "note": 45,
    "time": 113082,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113082,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113082,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 113088,
    "velocity": 85
  },
  {
    "note": 26,
    "time": 113088,
    "velocity": 109
  },
  {
    "note": 38,
    "time": 113088,
    "velocity": 108
  },
  {
    "note": 50,
    "time": 113146,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 113146,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 113146,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113152,
    "velocity": 112
  },
  {
    "note": 57,
    "time": 113152,
    "velocity": 109
  },
  {
    "note": 33,
    "time": 113152,
    "velocity": 83
  },
  {
    "note": 45,
    "time": 113210,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113210,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113210,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 113216,
    "velocity": 85
  },
  {
    "note": 28,
    "time": 113216,
    "velocity": 113
  },
  {
    "note": 40,
    "time": 113216,
    "velocity": 112
  },
  {
    "note": 52,
    "time": 113274,
    "velocity": 0
  },
  {
    "note": 28,
    "time": 113274,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 113274,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113280,
    "velocity": 106
  },
  {
    "note": 57,
    "time": 113280,
    "velocity": 106
  },
  {
    "note": 33,
    "time": 113280,
    "velocity": 80
  },
  {
    "note": 45,
    "time": 113338,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113338,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113338,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 113344,
    "velocity": 91
  },
  {
    "note": 29,
    "time": 113344,
    "velocity": 114
  },
  {
    "note": 41,
    "time": 113344,
    "velocity": 115
  },
  {
    "note": 53,
    "time": 113402,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 113402,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 113402,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113408,
    "velocity": 104
  },
  {
    "note": 57,
    "time": 113408,
    "velocity": 105
  },
  {
    "note": 33,
    "time": 113408,
    "velocity": 81
  },
  {
    "note": 45,
    "time": 113466,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113466,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113466,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113472,
    "velocity": 71
  },
  {
    "note": 21,
    "time": 113472,
    "velocity": 93
  },
  {
    "note": 33,
    "time": 113472,
    "velocity": 91
  },
  {
    "note": 45,
    "time": 113530,
    "velocity": 0
  },
  {
    "note": 21,
    "time": 113530,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113530,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113536,
    "velocity": 117
  },
  {
    "note": 57,
    "time": 113536,
    "velocity": 115
  },
  {
    "note": 33,
    "time": 113536,
    "velocity": 96
  },
  {
    "note": 45,
    "time": 113594,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113594,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113594,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 113600,
    "velocity": 80
  },
  {
    "note": 23,
    "time": 113600,
    "velocity": 107
  },
  {
    "note": 35,
    "time": 113600,
    "velocity": 105
  },
  {
    "note": 47,
    "time": 113658,
    "velocity": 0
  },
  {
    "note": 23,
    "time": 113658,
    "velocity": 0
  },
  {
    "note": 35,
    "time": 113658,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113664,
    "velocity": 114
  },
  {
    "note": 57,
    "time": 113664,
    "velocity": 115
  },
  {
    "note": 33,
    "time": 113664,
    "velocity": 92
  },
  {
    "note": 45,
    "time": 113722,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113722,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113722,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 113728,
    "velocity": 81
  },
  {
    "note": 25,
    "time": 113728,
    "velocity": 105
  },
  {
    "note": 37,
    "time": 113728,
    "velocity": 105
  },
  {
    "note": 49,
    "time": 113786,
    "velocity": 0
  },
  {
    "note": 25,
    "time": 113786,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 113786,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113792,
    "velocity": 112
  },
  {
    "note": 57,
    "time": 113792,
    "velocity": 112
  },
  {
    "note": 33,
    "time": 113792,
    "velocity": 85
  },
  {
    "note": 45,
    "time": 113850,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113850,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113850,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 113856,
    "velocity": 82
  },
  {
    "note": 26,
    "time": 113856,
    "velocity": 111
  },
  {
    "note": 38,
    "time": 113856,
    "velocity": 111
  },
  {
    "note": 50,
    "time": 113914,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 113914,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 113914,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 113920,
    "velocity": 110
  },
  {
    "note": 57,
    "time": 113920,
    "velocity": 110
  },
  {
    "note": 33,
    "time": 113920,
    "velocity": 83
  },
  {
    "note": 45,
    "time": 113978,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 113978,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 113978,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 113984,
    "velocity": 81
  },
  {
    "note": 25,
    "time": 113984,
    "velocity": 106
  },
  {
    "note": 37,
    "time": 113984,
    "velocity": 105
  },
  {
    "note": 49,
    "time": 114042,
    "velocity": 0
  },
  {
    "note": 25,
    "time": 114042,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 114042,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 114048,
    "velocity": 112
  },
  {
    "note": 57,
    "time": 114048,
    "velocity": 113
  },
  {
    "note": 33,
    "time": 114048,
    "velocity": 87
  },
  {
    "note": 45,
    "time": 114106,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 114106,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 114106,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 114112,
    "velocity": 83
  },
  {
    "note": 26,
    "time": 114112,
    "velocity": 108
  },
  {
    "note": 38,
    "time": 114112,
    "velocity": 109
  },
  {
    "note": 50,
    "time": 114170,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 114170,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 114170,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 114176,
    "velocity": 111
  },
  {
    "note": 57,
    "time": 114176,
    "velocity": 109
  },
  {
    "note": 33,
    "time": 114176,
    "velocity": 85
  },
  {
    "note": 45,
    "time": 114234,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 114234,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 114234,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 114240,
    "velocity": 84
  },
  {
    "note": 28,
    "time": 114240,
    "velocity": 111
  },
  {
    "note": 40,
    "time": 114240,
    "velocity": 113
  },
  {
    "note": 52,
    "time": 114298,
    "velocity": 0
  },
  {
    "note": 28,
    "time": 114298,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 114298,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 114304,
    "velocity": 107
  },
  {
    "note": 57,
    "time": 114304,
    "velocity": 106
  },
  {
    "note": 33,
    "time": 114304,
    "velocity": 80
  },
  {
    "note": 45,
    "time": 114362,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 114362,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 114362,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 114368,
    "velocity": 111
  },
  {
    "note": 29,
    "time": 114368,
    "velocity": 126
  },
  {
    "note": 41,
    "time": 114368,
    "velocity": 127
  },
  {
    "note": 67,
    "time": 114432,
    "velocity": 88
  },
  {
    "note": 76,
    "time": 114432,
    "velocity": 87
  },
  {
    "note": 67,
    "time": 114490,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 114490,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 114496,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 114496,
    "velocity": 89
  },
  {
    "note": 65,
    "time": 114554,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 114554,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 114560,
    "velocity": 92
  },
  {
    "note": 73,
    "time": 114560,
    "velocity": 90
  },
  {
    "note": 53,
    "time": 114599,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 114599,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 114599,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 114618,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 114618,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 114624,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 114624,
    "velocity": 101
  },
  {
    "note": 65,
    "time": 114624,
    "velocity": 87
  },
  {
    "note": 65,
    "time": 114682,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 114688,
    "velocity": 86
  },
  {
    "note": 65,
    "time": 114740,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 114740,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 114746,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 114752,
    "velocity": 99
  },
  {
    "note": 53,
    "time": 114752,
    "velocity": 86
  },
  {
    "note": 65,
    "time": 114752,
    "velocity": 85
  },
  {
    "note": 77,
    "time": 114816,
    "velocity": 84
  },
  {
    "note": 62,
    "time": 114868,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 114868,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 114868,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 114874,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 114880,
    "velocity": 94
  },
  {
    "note": 74,
    "time": 114880,
    "velocity": 89
  },
  {
    "note": 62,
    "time": 114880,
    "velocity": 99
  },
  {
    "note": 55,
    "time": 114880,
    "velocity": 104
  },
  {
    "note": 67,
    "time": 114880,
    "velocity": 101
  },
  {
    "note": 76,
    "time": 114938,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 114944,
    "velocity": 97
  },
  {
    "note": 55,
    "time": 114996,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 114996,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 115002,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 115008,
    "velocity": 103
  },
  {
    "note": 50,
    "time": 115008,
    "velocity": 82
  },
  {
    "note": 62,
    "time": 115008,
    "velocity": 84
  },
  {
    "note": 79,
    "time": 115066,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 115072,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 115111,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 115111,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 115124,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 115124,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 115130,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 115136,
    "velocity": 103
  },
  {
    "note": 73,
    "time": 115136,
    "velocity": 92
  },
  {
    "note": 61,
    "time": 115136,
    "velocity": 92
  },
  {
    "note": 57,
    "time": 115136,
    "velocity": 115
  },
  {
    "note": 69,
    "time": 115136,
    "velocity": 114
  },
  {
    "note": 82,
    "time": 115194,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 115200,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 115252,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 115252,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 115258,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 115264,
    "velocity": 88
  },
  {
    "note": 33,
    "time": 115264,
    "velocity": 74
  },
  {
    "note": 45,
    "time": 115264,
    "velocity": 71
  },
  {
    "note": 79,
    "time": 115322,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 115328,
    "velocity": 102
  },
  {
    "note": 73,
    "time": 115367,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 115367,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 115380,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 115380,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 115386,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 115392,
    "velocity": 90
  },
  {
    "note": 74,
    "time": 115392,
    "velocity": 104
  },
  {
    "note": 38,
    "time": 115392,
    "velocity": 102
  },
  {
    "note": 50,
    "time": 115392,
    "velocity": 102
  },
  {
    "note": 74,
    "time": 115450,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 115456,
    "velocity": 84
  },
  {
    "note": 57,
    "time": 115456,
    "velocity": 88
  },
  {
    "note": 77,
    "time": 115508,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 115514,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 115514,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 115520,
    "velocity": 91
  },
  {
    "note": 71,
    "time": 115520,
    "velocity": 100
  },
  {
    "note": 59,
    "time": 115520,
    "velocity": 101
  },
  {
    "note": 71,
    "time": 115578,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 115578,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 115584,
    "velocity": 102
  },
  {
    "note": 61,
    "time": 115584,
    "velocity": 102
  },
  {
    "note": 38,
    "time": 115623,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 115623,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 115636,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 115642,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 115642,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 115648,
    "velocity": 92
  },
  {
    "note": 74,
    "time": 115648,
    "velocity": 104
  },
  {
    "note": 62,
    "time": 115648,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 115706,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 115712,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 115764,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 115770,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 115776,
    "velocity": 102
  },
  {
    "note": 65,
    "time": 115776,
    "velocity": 92
  },
  {
    "note": 73,
    "time": 115776,
    "velocity": 92
  },
  {
    "note": 33,
    "time": 115776,
    "velocity": 87
  },
  {
    "note": 45,
    "time": 115776,
    "velocity": 85
  },
  {
    "note": 77,
    "time": 115834,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 115840,
    "velocity": 91
  },
  {
    "note": 62,
    "time": 115879,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 115892,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 115892,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 115892,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 115892,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 115898,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 115904,
    "velocity": 105
  },
  {
    "note": 77,
    "time": 115904,
    "velocity": 105
  },
  {
    "note": 74,
    "time": 115904,
    "velocity": 102
  },
  {
    "note": 34,
    "time": 115904,
    "velocity": 103
  },
  {
    "note": 46,
    "time": 115904,
    "velocity": 102
  },
  {
    "note": 74,
    "time": 115962,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 115968,
    "velocity": 92
  },
  {
    "note": 34,
    "time": 116020,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 116020,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 116026,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 116032,
    "velocity": 87
  },
  {
    "note": 31,
    "time": 116032,
    "velocity": 87
  },
  {
    "note": 43,
    "time": 116032,
    "velocity": 88
  },
  {
    "note": 70,
    "time": 116090,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 116096,
    "velocity": 89
  },
  {
    "note": 31,
    "time": 116148,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 116148,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 116154,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 116160,
    "velocity": 90
  },
  {
    "note": 65,
    "time": 116160,
    "velocity": 88
  },
  {
    "note": 36,
    "time": 116160,
    "velocity": 109
  },
  {
    "note": 48,
    "time": 116160,
    "velocity": 109
  },
  {
    "note": 67,
    "time": 116218,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 116224,
    "velocity": 102
  },
  {
    "note": 65,
    "time": 116250,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 116250,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 116276,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 116276,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 116276,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 116282,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 116288,
    "velocity": 90
  },
  {
    "note": 75,
    "time": 116288,
    "velocity": 91
  },
  {
    "note": 70,
    "time": 116288,
    "velocity": 101
  },
  {
    "note": 70,
    "time": 116288,
    "velocity": 107
  },
  {
    "note": 21,
    "time": 116288,
    "velocity": 70
  },
  {
    "note": 33,
    "time": 116288,
    "velocity": 70
  },
  {
    "note": 70,
    "time": 116346,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 116352,
    "velocity": 101
  },
  {
    "note": 70,
    "time": 116404,
    "velocity": 0
  },
  {
    "note": 21,
    "time": 116404,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 116404,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 116410,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 116416,
    "velocity": 88
  },
  {
    "note": 63,
    "time": 116416,
    "velocity": 84
  },
  {
    "note": 29,
    "time": 116416,
    "velocity": 112
  },
  {
    "note": 41,
    "time": 116416,
    "velocity": 108
  },
  {
    "note": 63,
    "time": 116474,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 116474,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 116474,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 116480,
    "velocity": 88
  },
  {
    "note": 60,
    "time": 116480,
    "velocity": 87
  },
  {
    "note": 72,
    "time": 116538,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 116538,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 116544,
    "velocity": 85
  },
  {
    "note": 57,
    "time": 116544,
    "velocity": 85
  },
  {
    "note": 69,
    "time": 116602,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 116602,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 116608,
    "velocity": 86
  },
  {
    "note": 53,
    "time": 116608,
    "velocity": 84
  },
  {
    "note": 69,
    "time": 116647,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 116647,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 116647,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 116666,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 116666,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 116672,
    "velocity": 96
  },
  {
    "note": 57,
    "time": 116672,
    "velocity": 106
  },
  {
    "note": 69,
    "time": 116730,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 116736,
    "velocity": 105
  },
  {
    "note": 57,
    "time": 116788,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 116794,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 116800,
    "velocity": 87
  },
  {
    "note": 75,
    "time": 116800,
    "velocity": 105
  },
  {
    "note": 33,
    "time": 116800,
    "velocity": 87
  },
  {
    "note": 45,
    "time": 116800,
    "velocity": 86
  },
  {
    "note": 75,
    "time": 116858,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 116864,
    "velocity": 89
  },
  {
    "note": 33,
    "time": 116916,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 116916,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 116928,
    "velocity": 103
  },
  {
    "note": 46,
    "time": 116928,
    "velocity": 103
  },
  {
    "note": 58,
    "time": 116992,
    "velocity": 87
  },
  {
    "note": 84,
    "time": 117044,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 117044,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 117050,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 117056,
    "velocity": 89
  },
  {
    "note": 70,
    "time": 117056,
    "velocity": 92
  },
  {
    "note": 55,
    "time": 117056,
    "velocity": 84
  },
  {
    "note": 55,
    "time": 117114,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 117120,
    "velocity": 112
  },
  {
    "note": 62,
    "time": 117120,
    "velocity": 112
  },
  {
    "note": 34,
    "time": 117159,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 117159,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 117172,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 117172,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 117178,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 117178,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 117184,
    "velocity": 92
  },
  {
    "note": 55,
    "time": 117184,
    "velocity": 84
  },
  {
    "note": 67,
    "time": 117242,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 117242,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 117248,
    "velocity": 103
  },
  {
    "note": 70,
    "time": 117306,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 117312,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 117312,
    "velocity": 107
  },
  {
    "note": 34,
    "time": 117312,
    "velocity": 87
  },
  {
    "note": 46,
    "time": 117312,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 117370,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 117376,
    "velocity": 80
  },
  {
    "note": 79,
    "time": 117428,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 117428,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 117428,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 117440,
    "velocity": 88
  },
  {
    "note": 36,
    "time": 117440,
    "velocity": 101
  },
  {
    "note": 48,
    "time": 117440,
    "velocity": 102
  },
  {
    "note": 75,
    "time": 117498,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 117504,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 117504,
    "velocity": 85
  },
  {
    "note": 77,
    "time": 117562,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 117562,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 117568,
    "velocity": 86
  },
  {
    "note": 58,
    "time": 117568,
    "velocity": 86
  },
  {
    "note": 74,
    "time": 117626,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 117626,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 117632,
    "velocity": 98
  },
  {
    "note": 60,
    "time": 117632,
    "velocity": 97
  },
  {
    "note": 67,
    "time": 117671,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 117671,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 117671,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 117690,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 117690,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 117696,
    "velocity": 91
  },
  {
    "note": 57,
    "time": 117696,
    "velocity": 88
  },
  {
    "note": 72,
    "time": 117754,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 117754,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 117760,
    "velocity": 89
  },
  {
    "note": 67,
    "time": 117760,
    "velocity": 118
  },
  {
    "note": 70,
    "time": 117818,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 117818,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 117824,
    "velocity": 88
  },
  {
    "note": 66,
    "time": 117824,
    "velocity": 95
  },
  {
    "note": 36,
    "time": 117824,
    "velocity": 87
  },
  {
    "note": 48,
    "time": 117824,
    "velocity": 87
  },
  {
    "note": 69,
    "time": 117882,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 117882,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 117888,
    "velocity": 90
  },
  {
    "note": 64,
    "time": 117888,
    "velocity": 89
  },
  {
    "note": 36,
    "time": 117940,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 117940,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 117946,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 117946,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 117952,
    "velocity": 93
  },
  {
    "note": 57,
    "time": 117952,
    "velocity": 110
  },
  {
    "note": 69,
    "time": 117952,
    "velocity": 109
  },
  {
    "note": 38,
    "time": 117952,
    "velocity": 127
  },
  {
    "note": 50,
    "time": 117952,
    "velocity": 127
  },
  {
    "note": 66,
    "time": 118010,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 118016,
    "velocity": 86
  },
  {
    "note": 62,
    "time": 118074,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 118080,
    "velocity": 105
  },
  {
    "note": 66,
    "time": 118138,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 118144,
    "velocity": 101
  },
  {
    "note": 57,
    "time": 118183,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 118183,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 118202,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 118208,
    "velocity": 104
  },
  {
    "note": 38,
    "time": 118208,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 118208,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 118208,
    "velocity": 74
  },
  {
    "note": 69,
    "time": 118266,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 118272,
    "velocity": 111
  },
  {
    "note": 74,
    "time": 118272,
    "velocity": 110
  },
  {
    "note": 62,
    "time": 118330,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 118330,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 118336,
    "velocity": 86
  },
  {
    "note": 57,
    "time": 118381,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 118394,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 118400,
    "velocity": 90
  },
  {
    "note": 55,
    "time": 118400,
    "velocity": 84
  },
  {
    "note": 67,
    "time": 118458,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 118458,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 118464,
    "velocity": 94
  },
  {
    "note": 54,
    "time": 118464,
    "velocity": 95
  },
  {
    "note": 38,
    "time": 118464,
    "velocity": 114
  },
  {
    "note": 50,
    "time": 118464,
    "velocity": 112
  },
  {
    "note": 66,
    "time": 118522,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 118528,
    "velocity": 84
  },
  {
    "note": 62,
    "time": 118586,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 118592,
    "velocity": 105
  },
  {
    "note": 54,
    "time": 118637,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 118650,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 118656,
    "velocity": 103
  },
  {
    "note": 55,
    "time": 118656,
    "velocity": 100
  },
  {
    "note": 67,
    "time": 118714,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 118714,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 118720,
    "velocity": 107
  },
  {
    "note": 38,
    "time": 118720,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 118720,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 118720,
    "velocity": 106
  },
  {
    "note": 69,
    "time": 118778,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 118784,
    "velocity": 109
  },
  {
    "note": 74,
    "time": 118784,
    "velocity": 108
  },
  {
    "note": 62,
    "time": 118842,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 118842,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 118848,
    "velocity": 84
  },
  {
    "note": 57,
    "time": 118893,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 118906,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 118912,
    "velocity": 88
  },
  {
    "note": 55,
    "time": 118912,
    "velocity": 92
  },
  {
    "note": 67,
    "time": 118970,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 118970,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 118976,
    "velocity": 98
  },
  {
    "note": 55,
    "time": 118976,
    "velocity": 124
  },
  {
    "note": 38,
    "time": 118976,
    "velocity": 110
  },
  {
    "note": 43,
    "time": 118976,
    "velocity": 109
  },
  {
    "note": 50,
    "time": 118976,
    "velocity": 111
  },
  {
    "note": 67,
    "time": 119034,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 119040,
    "velocity": 83
  },
  {
    "note": 62,
    "time": 119098,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 119104,
    "velocity": 104
  },
  {
    "note": 55,
    "time": 119149,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 119162,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 119168,
    "velocity": 102
  },
  {
    "note": 57,
    "time": 119168,
    "velocity": 127
  },
  {
    "note": 38,
    "time": 119207,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 119207,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 119207,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 119226,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 119226,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 119232,
    "velocity": 102
  },
  {
    "note": 58,
    "time": 119232,
    "velocity": 127
  },
  {
    "note": 70,
    "time": 119290,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 119296,
    "velocity": 107
  },
  {
    "note": 74,
    "time": 119296,
    "velocity": 107
  },
  {
    "note": 62,
    "time": 119354,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 119354,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 119360,
    "velocity": 88
  },
  {
    "note": 58,
    "time": 119405,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 119418,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 119424,
    "velocity": 89
  },
  {
    "note": 57,
    "time": 119424,
    "velocity": 115
  },
  {
    "note": 69,
    "time": 119482,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 119482,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 119488,
    "velocity": 92
  },
  {
    "note": 55,
    "time": 119488,
    "velocity": 117
  },
  {
    "note": 38,
    "time": 119488,
    "velocity": 107
  },
  {
    "note": 43,
    "time": 119488,
    "velocity": 108
  },
  {
    "note": 50,
    "time": 119488,
    "velocity": 107
  },
  {
    "note": 67,
    "time": 119546,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 119552,
    "velocity": 84
  },
  {
    "note": 62,
    "time": 119610,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 119616,
    "velocity": 106
  },
  {
    "note": 55,
    "time": 119661,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 119674,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 119680,
    "velocity": 105
  },
  {
    "note": 57,
    "time": 119680,
    "velocity": 126
  },
  {
    "note": 38,
    "time": 119719,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 119719,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 119719,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 119738,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 119738,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 119744,
    "velocity": 103
  },
  {
    "note": 58,
    "time": 119744,
    "velocity": 127
  },
  {
    "note": 70,
    "time": 119802,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 119808,
    "velocity": 108
  },
  {
    "note": 74,
    "time": 119808,
    "velocity": 107
  },
  {
    "note": 58,
    "time": 119860,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 119866,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 119866,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 119872,
    "velocity": 86
  },
  {
    "note": 60,
    "time": 119872,
    "velocity": 127
  },
  {
    "note": 70,
    "time": 119930,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 119930,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 119936,
    "velocity": 90
  },
  {
    "note": 58,
    "time": 119936,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 119994,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 119994,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 120000,
    "velocity": 97
  },
  {
    "note": 57,
    "time": 120000,
    "velocity": 91
  },
  {
    "note": 38,
    "time": 120000,
    "velocity": 110
  },
  {
    "note": 45,
    "time": 120000,
    "velocity": 111
  },
  {
    "note": 50,
    "time": 120000,
    "velocity": 109
  },
  {
    "note": 69,
    "time": 120058,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 120064,
    "velocity": 89
  },
  {
    "note": 66,
    "time": 120122,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 120128,
    "velocity": 103
  },
  {
    "note": 57,
    "time": 120173,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 120186,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 120192,
    "velocity": 101
  },
  {
    "note": 58,
    "time": 120192,
    "velocity": 124
  },
  {
    "note": 38,
    "time": 120231,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 120231,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 120231,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 120250,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 120250,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 120256,
    "velocity": 104
  },
  {
    "note": 60,
    "time": 120256,
    "velocity": 127
  },
  {
    "note": 72,
    "time": 120314,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 120320,
    "velocity": 105
  },
  {
    "note": 75,
    "time": 120320,
    "velocity": 106
  },
  {
    "note": 63,
    "time": 120378,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 120378,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 120384,
    "velocity": 89
  },
  {
    "note": 60,
    "time": 120429,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 120442,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 120448,
    "velocity": 87
  },
  {
    "note": 58,
    "time": 120448,
    "velocity": 92
  },
  {
    "note": 70,
    "time": 120506,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 120506,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 120512,
    "velocity": 94
  },
  {
    "note": 57,
    "time": 120512,
    "velocity": 94
  },
  {
    "note": 38,
    "time": 120512,
    "velocity": 108
  },
  {
    "note": 45,
    "time": 120512,
    "velocity": 109
  },
  {
    "note": 50,
    "time": 120512,
    "velocity": 109
  },
  {
    "note": 69,
    "time": 120570,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 120576,
    "velocity": 87
  },
  {
    "note": 66,
    "time": 120634,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 120640,
    "velocity": 102
  },
  {
    "note": 57,
    "time": 120685,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 120698,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 120704,
    "velocity": 101
  },
  {
    "note": 58,
    "time": 120704,
    "velocity": 101
  },
  {
    "note": 38,
    "time": 120743,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 120743,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 120743,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 120762,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 120762,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 120768,
    "velocity": 106
  },
  {
    "note": 60,
    "time": 120768,
    "velocity": 106
  },
  {
    "note": 72,
    "time": 120826,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 120832,
    "velocity": 104
  },
  {
    "note": 75,
    "time": 120832,
    "velocity": 105
  },
  {
    "note": 63,
    "time": 120890,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 120890,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 120896,
    "velocity": 88
  },
  {
    "note": 60,
    "time": 120941,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 120954,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 120960,
    "velocity": 89
  },
  {
    "note": 58,
    "time": 120960,
    "velocity": 92
  },
  {
    "note": 70,
    "time": 121018,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 121018,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 121024,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 121024,
    "velocity": 93
  },
  {
    "note": 38,
    "time": 121024,
    "velocity": 113
  },
  {
    "note": 46,
    "time": 121024,
    "velocity": 112
  },
  {
    "note": 50,
    "time": 121024,
    "velocity": 110
  },
  {
    "note": 57,
    "time": 121082,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 121082,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 121088,
    "velocity": 100
  },
  {
    "note": 70,
    "time": 121146,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 121152,
    "velocity": 107
  },
  {
    "note": 62,
    "time": 121152,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 121210,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 121210,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 121216,
    "velocity": 107
  },
  {
    "note": 66,
    "time": 121216,
    "velocity": 104
  },
  {
    "note": 38,
    "time": 121255,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 121255,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 121255,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 121274,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 121274,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 121280,
    "velocity": 107
  },
  {
    "note": 67,
    "time": 121280,
    "velocity": 105
  },
  {
    "note": 79,
    "time": 121338,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 121344,
    "velocity": 106
  },
  {
    "note": 82,
    "time": 121344,
    "velocity": 103
  },
  {
    "note": 70,
    "time": 121402,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 121402,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 121408,
    "velocity": 90
  },
  {
    "note": 67,
    "time": 121453,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 121466,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 121472,
    "velocity": 81
  },
  {
    "note": 62,
    "time": 121472,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 121530,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 121530,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 121536,
    "velocity": 86
  },
  {
    "note": 58,
    "time": 121536,
    "velocity": 86
  },
  {
    "note": 38,
    "time": 121536,
    "velocity": 109
  },
  {
    "note": 46,
    "time": 121536,
    "velocity": 108
  },
  {
    "note": 50,
    "time": 121536,
    "velocity": 109
  },
  {
    "note": 70,
    "time": 121594,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 121600,
    "velocity": 84
  },
  {
    "note": 67,
    "time": 121658,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 121664,
    "velocity": 102
  },
  {
    "note": 58,
    "time": 121709,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 121722,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 121728,
    "velocity": 107
  },
  {
    "note": 50,
    "time": 121728,
    "velocity": 103
  },
  {
    "note": 62,
    "time": 121728,
    "velocity": 105
  },
  {
    "note": 38,
    "time": 121767,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 121767,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 121767,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 121786,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 121786,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 121786,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 121792,
    "velocity": 112
  },
  {
    "note": 55,
    "time": 121792,
    "velocity": 84
  },
  {
    "note": 79,
    "time": 121850,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 121850,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 121856,
    "velocity": 107
  },
  {
    "note": 82,
    "time": 121856,
    "velocity": 105
  },
  {
    "note": 58,
    "time": 121856,
    "velocity": 102
  },
  {
    "note": 70,
    "time": 121914,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 121914,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 121914,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 121920,
    "velocity": 88
  },
  {
    "note": 55,
    "time": 121920,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 121978,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 121978,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 121984,
    "velocity": 82
  },
  {
    "note": 50,
    "time": 121984,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 122042,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 122042,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 122048,
    "velocity": 91
  },
  {
    "note": 62,
    "time": 122048,
    "velocity": 88
  },
  {
    "note": 48,
    "time": 122048,
    "velocity": 91
  },
  {
    "note": 38,
    "time": 122048,
    "velocity": 112
  },
  {
    "note": 50,
    "time": 122048,
    "velocity": 112
  },
  {
    "note": 60,
    "time": 122048,
    "velocity": 89
  },
  {
    "note": 72,
    "time": 122106,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 122106,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 122112,
    "velocity": 87
  },
  {
    "note": 45,
    "time": 122112,
    "velocity": 85
  },
  {
    "note": 69,
    "time": 122170,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 122170,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 122176,
    "velocity": 102
  },
  {
    "note": 48,
    "time": 122176,
    "velocity": 103
  },
  {
    "note": 60,
    "time": 122221,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 122234,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 122234,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 122240,
    "velocity": 106
  },
  {
    "note": 51,
    "time": 122240,
    "velocity": 105
  },
  {
    "note": 63,
    "time": 122240,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 122279,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 122279,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 122279,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 122298,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 122298,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 122298,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 122304,
    "velocity": 109
  },
  {
    "note": 54,
    "time": 122304,
    "velocity": 106
  },
  {
    "note": 78,
    "time": 122362,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 122362,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 122368,
    "velocity": 107
  },
  {
    "note": 81,
    "time": 122368,
    "velocity": 107
  },
  {
    "note": 57,
    "time": 122368,
    "velocity": 104
  },
  {
    "note": 69,
    "time": 122426,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 122426,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 122426,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 122432,
    "velocity": 88
  },
  {
    "note": 54,
    "time": 122432,
    "velocity": 91
  },
  {
    "note": 78,
    "time": 122490,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 122490,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 122496,
    "velocity": 83
  },
  {
    "note": 51,
    "time": 122496,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 122554,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 122554,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 122560,
    "velocity": 91
  },
  {
    "note": 62,
    "time": 122560,
    "velocity": 85
  },
  {
    "note": 48,
    "time": 122560,
    "velocity": 90
  },
  {
    "note": 38,
    "time": 122560,
    "velocity": 110
  },
  {
    "note": 50,
    "time": 122560,
    "velocity": 109
  },
  {
    "note": 60,
    "time": 122560,
    "velocity": 90
  },
  {
    "note": 72,
    "time": 122618,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 122618,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 122624,
    "velocity": 88
  },
  {
    "note": 45,
    "time": 122624,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 122682,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 122682,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 122688,
    "velocity": 103
  },
  {
    "note": 48,
    "time": 122688,
    "velocity": 103
  },
  {
    "note": 60,
    "time": 122733,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 122746,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 122746,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 122752,
    "velocity": 103
  },
  {
    "note": 51,
    "time": 122752,
    "velocity": 104
  },
  {
    "note": 63,
    "time": 122752,
    "velocity": 103
  },
  {
    "note": 62,
    "time": 122791,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 122791,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 122791,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 122810,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 122810,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 122810,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 122816,
    "velocity": 110
  },
  {
    "note": 54,
    "time": 122816,
    "velocity": 108
  },
  {
    "note": 78,
    "time": 122874,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 122874,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 122880,
    "velocity": 107
  },
  {
    "note": 81,
    "time": 122880,
    "velocity": 106
  },
  {
    "note": 57,
    "time": 122880,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 122938,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 122938,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 122938,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 122944,
    "velocity": 89
  },
  {
    "note": 54,
    "time": 122944,
    "velocity": 91
  },
  {
    "note": 78,
    "time": 123002,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 123002,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 123008,
    "velocity": 87
  },
  {
    "note": 51,
    "time": 123008,
    "velocity": 114
  },
  {
    "note": 63,
    "time": 123008,
    "velocity": 116
  },
  {
    "note": 75,
    "time": 123066,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 123066,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 123066,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 123072,
    "velocity": 93
  },
  {
    "note": 74,
    "time": 123072,
    "velocity": 92
  },
  {
    "note": 54,
    "time": 123072,
    "velocity": 96
  },
  {
    "note": 62,
    "time": 123072,
    "velocity": 100
  },
  {
    "note": 38,
    "time": 123136,
    "velocity": 85
  },
  {
    "note": 50,
    "time": 123136,
    "velocity": 86
  },
  {
    "note": 66,
    "time": 123188,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 123188,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 123188,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 123188,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 123194,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 123194,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 123200,
    "velocity": 89
  },
  {
    "note": 48,
    "time": 123200,
    "velocity": 87
  },
  {
    "note": 36,
    "time": 123258,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 123258,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 123264,
    "velocity": 101
  },
  {
    "note": 50,
    "time": 123264,
    "velocity": 102
  },
  {
    "note": 38,
    "time": 123322,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 123322,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 123328,
    "velocity": 88
  },
  {
    "note": 79,
    "time": 123328,
    "velocity": 87
  },
  {
    "note": 86,
    "time": 123328,
    "velocity": 88
  },
  {
    "note": 34,
    "time": 123328,
    "velocity": 91
  },
  {
    "note": 46,
    "time": 123328,
    "velocity": 90
  },
  {
    "note": 34,
    "time": 123386,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 123386,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 123392,
    "velocity": 105
  },
  {
    "note": 50,
    "time": 123392,
    "velocity": 106
  },
  {
    "note": 74,
    "time": 123444,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 123444,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 123444,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 123450,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 123450,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 123456,
    "velocity": 87
  },
  {
    "note": 78,
    "time": 123456,
    "velocity": 87
  },
  {
    "note": 84,
    "time": 123456,
    "velocity": 88
  },
  {
    "note": 33,
    "time": 123456,
    "velocity": 85
  },
  {
    "note": 45,
    "time": 123456,
    "velocity": 82
  },
  {
    "note": 33,
    "time": 123514,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 123514,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 123520,
    "velocity": 107
  },
  {
    "note": 50,
    "time": 123520,
    "velocity": 107
  },
  {
    "note": 72,
    "time": 123572,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 123572,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 123572,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 123578,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 123578,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 123584,
    "velocity": 87
  },
  {
    "note": 79,
    "time": 123584,
    "velocity": 87
  },
  {
    "note": 82,
    "time": 123584,
    "velocity": 91
  },
  {
    "note": 31,
    "time": 123584,
    "velocity": 83
  },
  {
    "note": 43,
    "time": 123584,
    "velocity": 85
  },
  {
    "note": 31,
    "time": 123642,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 123642,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 123648,
    "velocity": 118
  },
  {
    "note": 55,
    "time": 123648,
    "velocity": 122
  },
  {
    "note": 43,
    "time": 123706,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 123706,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 123712,
    "velocity": 94
  },
  {
    "note": 53,
    "time": 123712,
    "velocity": 94
  },
  {
    "note": 41,
    "time": 123770,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 123770,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 123776,
    "velocity": 104
  },
  {
    "note": 55,
    "time": 123776,
    "velocity": 103
  },
  {
    "note": 70,
    "time": 123815,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 123815,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 123815,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 123834,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 123834,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 123840,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 123840,
    "velocity": 103
  },
  {
    "note": 84,
    "time": 123840,
    "velocity": 104
  },
  {
    "note": 39,
    "time": 123840,
    "velocity": 89
  },
  {
    "note": 51,
    "time": 123840,
    "velocity": 90
  },
  {
    "note": 39,
    "time": 123898,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 123898,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 123904,
    "velocity": 106
  },
  {
    "note": 55,
    "time": 123904,
    "velocity": 104
  },
  {
    "note": 72,
    "time": 123956,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 123956,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 123956,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 123962,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 123962,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 123968,
    "velocity": 102
  },
  {
    "note": 83,
    "time": 123968,
    "velocity": 101
  },
  {
    "note": 86,
    "time": 123968,
    "velocity": 101
  },
  {
    "note": 38,
    "time": 123968,
    "velocity": 83
  },
  {
    "note": 50,
    "time": 123968,
    "velocity": 85
  },
  {
    "note": 38,
    "time": 124026,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 124026,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 124032,
    "velocity": 107
  },
  {
    "note": 55,
    "time": 124032,
    "velocity": 109
  },
  {
    "note": 74,
    "time": 124084,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 124084,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 124084,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 124090,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 124090,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 124096,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 124096,
    "velocity": 104
  },
  {
    "note": 84,
    "time": 124096,
    "velocity": 102
  },
  {
    "note": 87,
    "time": 124096,
    "velocity": 105
  },
  {
    "note": 36,
    "time": 124096,
    "velocity": 82
  },
  {
    "note": 48,
    "time": 124096,
    "velocity": 85
  },
  {
    "note": 36,
    "time": 124154,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 124154,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 124160,
    "velocity": 94
  },
  {
    "note": 48,
    "time": 124160,
    "velocity": 91
  },
  {
    "note": 36,
    "time": 124218,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 124218,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 124224,
    "velocity": 89
  },
  {
    "note": 46,
    "time": 124224,
    "velocity": 89
  },
  {
    "note": 34,
    "time": 124282,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 124282,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 124288,
    "velocity": 101
  },
  {
    "note": 48,
    "time": 124288,
    "velocity": 102
  },
  {
    "note": 75,
    "time": 124327,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 124327,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 124327,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 124327,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 124346,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 124346,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 124352,
    "velocity": 106
  },
  {
    "note": 84,
    "time": 124352,
    "velocity": 105
  },
  {
    "note": 89,
    "time": 124352,
    "velocity": 105
  },
  {
    "note": 33,
    "time": 124352,
    "velocity": 90
  },
  {
    "note": 45,
    "time": 124352,
    "velocity": 90
  },
  {
    "note": 33,
    "time": 124410,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 124410,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 124416,
    "velocity": 102
  },
  {
    "note": 48,
    "time": 124416,
    "velocity": 103
  },
  {
    "note": 77,
    "time": 124468,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 124468,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 124468,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 124474,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 124474,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 124480,
    "velocity": 102
  },
  {
    "note": 82,
    "time": 124480,
    "velocity": 101
  },
  {
    "note": 88,
    "time": 124480,
    "velocity": 104
  },
  {
    "note": 91,
    "time": 124480,
    "velocity": 101
  },
  {
    "note": 31,
    "time": 124480,
    "velocity": 83
  },
  {
    "note": 43,
    "time": 124480,
    "velocity": 84
  },
  {
    "note": 31,
    "time": 124538,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 124538,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 124544,
    "velocity": 106
  },
  {
    "note": 48,
    "time": 124544,
    "velocity": 107
  },
  {
    "note": 79,
    "time": 124596,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 124596,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 124596,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 124596,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 124602,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 124602,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 124608,
    "velocity": 101
  },
  {
    "note": 84,
    "time": 124608,
    "velocity": 103
  },
  {
    "note": 89,
    "time": 124608,
    "velocity": 101
  },
  {
    "note": 93,
    "time": 124608,
    "velocity": 103
  },
  {
    "note": 29,
    "time": 124608,
    "velocity": 85
  },
  {
    "note": 41,
    "time": 124608,
    "velocity": 84
  },
  {
    "note": 29,
    "time": 124666,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 124666,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 124672,
    "velocity": 122
  },
  {
    "note": 53,
    "time": 124672,
    "velocity": 119
  },
  {
    "note": 41,
    "time": 124730,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 124730,
    "velocity": 0
  },
  {
    "note": 39,
    "time": 124736,
    "velocity": 93
  },
  {
    "note": 51,
    "time": 124736,
    "velocity": 95
  },
  {
    "note": 39,
    "time": 124794,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 124794,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 124800,
    "velocity": 102
  },
  {
    "note": 53,
    "time": 124800,
    "velocity": 104
  },
  {
    "note": 81,
    "time": 124839,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 124839,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 124839,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 124839,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 124858,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 124858,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 124864,
    "velocity": 88
  },
  {
    "note": 82,
    "time": 124864,
    "velocity": 90
  },
  {
    "note": 89,
    "time": 124864,
    "velocity": 91
  },
  {
    "note": 38,
    "time": 124864,
    "velocity": 92
  },
  {
    "note": 50,
    "time": 124864,
    "velocity": 91
  },
  {
    "note": 38,
    "time": 124922,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 124922,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 124928,
    "velocity": 101
  },
  {
    "note": 53,
    "time": 124928,
    "velocity": 104
  },
  {
    "note": 77,
    "time": 124980,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 124980,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 124980,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 124986,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 124986,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 124992,
    "velocity": 86
  },
  {
    "note": 81,
    "time": 124992,
    "velocity": 89
  },
  {
    "note": 87,
    "time": 124992,
    "velocity": 88
  },
  {
    "note": 36,
    "time": 124992,
    "velocity": 83
  },
  {
    "note": 48,
    "time": 124992,
    "velocity": 86
  },
  {
    "note": 36,
    "time": 125050,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 125050,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 125056,
    "velocity": 108
  },
  {
    "note": 53,
    "time": 125056,
    "velocity": 107
  },
  {
    "note": 75,
    "time": 125108,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 125108,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 125108,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 125114,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 125114,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 125120,
    "velocity": 93
  },
  {
    "note": 82,
    "time": 125120,
    "velocity": 93
  },
  {
    "note": 86,
    "time": 125120,
    "velocity": 91
  },
  {
    "note": 34,
    "time": 125120,
    "velocity": 83
  },
  {
    "note": 46,
    "time": 125120,
    "velocity": 81
  },
  {
    "note": 74,
    "time": 125178,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 125178,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 125178,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 125184,
    "velocity": 100
  },
  {
    "note": 79,
    "time": 125184,
    "velocity": 99
  },
  {
    "note": 87,
    "time": 125184,
    "velocity": 100
  },
  {
    "note": 34,
    "time": 125236,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 125236,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 125242,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 125242,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 125242,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 125248,
    "velocity": 90
  },
  {
    "note": 77,
    "time": 125248,
    "velocity": 89
  },
  {
    "note": 86,
    "time": 125248,
    "velocity": 92
  },
  {
    "note": 39,
    "time": 125248,
    "velocity": 105
  },
  {
    "note": 51,
    "time": 125248,
    "velocity": 105
  },
  {
    "note": 74,
    "time": 125306,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 125306,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 125306,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125312,
    "velocity": 91
  },
  {
    "note": 75,
    "time": 125312,
    "velocity": 91
  },
  {
    "note": 84,
    "time": 125312,
    "velocity": 90
  },
  {
    "note": 39,
    "time": 125364,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 125364,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125370,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 125370,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 125370,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 125376,
    "velocity": 93
  },
  {
    "note": 74,
    "time": 125376,
    "velocity": 91
  },
  {
    "note": 82,
    "time": 125376,
    "velocity": 90
  },
  {
    "note": 41,
    "time": 125376,
    "velocity": 107
  },
  {
    "note": 53,
    "time": 125376,
    "velocity": 107
  },
  {
    "note": 70,
    "time": 125434,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 125434,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 125434,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125440,
    "velocity": 102
  },
  {
    "note": 75,
    "time": 125440,
    "velocity": 100
  },
  {
    "note": 84,
    "time": 125440,
    "velocity": 102
  },
  {
    "note": 41,
    "time": 125492,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 125492,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125498,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 125498,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 125498,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 125504,
    "velocity": 89
  },
  {
    "note": 74,
    "time": 125504,
    "velocity": 88
  },
  {
    "note": 82,
    "time": 125504,
    "velocity": 90
  },
  {
    "note": 29,
    "time": 125504,
    "velocity": 69
  },
  {
    "note": 41,
    "time": 125504,
    "velocity": 69
  },
  {
    "note": 70,
    "time": 125562,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 125562,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 125562,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 125568,
    "velocity": 92
  },
  {
    "note": 72,
    "time": 125568,
    "velocity": 92
  },
  {
    "note": 81,
    "time": 125568,
    "velocity": 90
  },
  {
    "note": 29,
    "time": 125620,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 125620,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 125626,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125626,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 125626,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 125632,
    "velocity": 92
  },
  {
    "note": 70,
    "time": 125632,
    "velocity": 92
  },
  {
    "note": 79,
    "time": 125632,
    "velocity": 94
  },
  {
    "note": 31,
    "time": 125632,
    "velocity": 100
  },
  {
    "note": 43,
    "time": 125632,
    "velocity": 101
  },
  {
    "note": 67,
    "time": 125690,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 125690,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 125690,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125696,
    "velocity": 108
  },
  {
    "note": 75,
    "time": 125696,
    "velocity": 106
  },
  {
    "note": 84,
    "time": 125696,
    "velocity": 109
  },
  {
    "note": 31,
    "time": 125748,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 125748,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125754,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 125754,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 125754,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 125760,
    "velocity": 91
  },
  {
    "note": 74,
    "time": 125760,
    "velocity": 93
  },
  {
    "note": 82,
    "time": 125760,
    "velocity": 91
  },
  {
    "note": 36,
    "time": 125760,
    "velocity": 110
  },
  {
    "note": 48,
    "time": 125760,
    "velocity": 107
  },
  {
    "note": 70,
    "time": 125818,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 125818,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 125818,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 125824,
    "velocity": 91
  },
  {
    "note": 72,
    "time": 125824,
    "velocity": 92
  },
  {
    "note": 81,
    "time": 125824,
    "velocity": 92
  },
  {
    "note": 36,
    "time": 125876,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 125876,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 125882,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 125882,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 125882,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 125888,
    "velocity": 91
  },
  {
    "note": 70,
    "time": 125888,
    "velocity": 93
  },
  {
    "note": 79,
    "time": 125888,
    "velocity": 92
  },
  {
    "note": 38,
    "time": 125888,
    "velocity": 106
  },
  {
    "note": 50,
    "time": 125888,
    "velocity": 107
  },
  {
    "note": 67,
    "time": 125946,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 125946,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 125946,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 125952,
    "velocity": 99
  },
  {
    "note": 72,
    "time": 125952,
    "velocity": 99
  },
  {
    "note": 81,
    "time": 125952,
    "velocity": 101
  },
  {
    "note": 38,
    "time": 126004,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 126004,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 126010,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 126010,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 126010,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 126016,
    "velocity": 89
  },
  {
    "note": 70,
    "time": 126016,
    "velocity": 90
  },
  {
    "note": 79,
    "time": 126016,
    "velocity": 92
  },
  {
    "note": 26,
    "time": 126016,
    "velocity": 71
  },
  {
    "note": 38,
    "time": 126016,
    "velocity": 69
  },
  {
    "note": 67,
    "time": 126074,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 126074,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 126074,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 126080,
    "velocity": 90
  },
  {
    "note": 69,
    "time": 126080,
    "velocity": 89
  },
  {
    "note": 78,
    "time": 126080,
    "velocity": 91
  },
  {
    "note": 26,
    "time": 126132,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 126132,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 126138,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 126138,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 126138,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 126144,
    "velocity": 101
  },
  {
    "note": 70,
    "time": 126144,
    "velocity": 101
  },
  {
    "note": 79,
    "time": 126144,
    "velocity": 102
  },
  {
    "note": 31,
    "time": 126144,
    "velocity": 107
  },
  {
    "note": 43,
    "time": 126144,
    "velocity": 109
  },
  {
    "note": 67,
    "time": 126202,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 126202,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 126202,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 126208,
    "velocity": 91
  },
  {
    "note": 69,
    "time": 126208,
    "velocity": 90
  },
  {
    "note": 77,
    "time": 126208,
    "velocity": 91
  },
  {
    "note": 65,
    "time": 126266,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 126266,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 126266,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 126272,
    "velocity": 88
  },
  {
    "note": 67,
    "time": 126272,
    "velocity": 91
  },
  {
    "note": 76,
    "time": 126272,
    "velocity": 92
  },
  {
    "note": 64,
    "time": 126330,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 126330,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 126330,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 126336,
    "velocity": 90
  },
  {
    "note": 65,
    "time": 126336,
    "velocity": 87
  },
  {
    "note": 74,
    "time": 126336,
    "velocity": 89
  },
  {
    "note": 31,
    "time": 126375,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 126375,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 126394,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 126394,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 126394,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 126400,
    "velocity": 91
  },
  {
    "note": 64,
    "time": 126400,
    "velocity": 91
  },
  {
    "note": 73,
    "time": 126400,
    "velocity": 91
  },
  {
    "note": 33,
    "time": 126464,
    "velocity": 84
  },
  {
    "note": 45,
    "time": 126464,
    "velocity": 85
  },
  {
    "note": 61,
    "time": 126516,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 126516,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 126516,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 126522,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 126522,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 126528,
    "velocity": 104
  },
  {
    "note": 67,
    "time": 126528,
    "velocity": 104
  },
  {
    "note": 76,
    "time": 126528,
    "velocity": 102
  },
  {
    "note": 31,
    "time": 126528,
    "velocity": 89
  },
  {
    "note": 43,
    "time": 126528,
    "velocity": 89
  },
  {
    "note": 31,
    "time": 126586,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 126586,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 126592,
    "velocity": 103
  },
  {
    "note": 45,
    "time": 126592,
    "velocity": 102
  },
  {
    "note": 64,
    "time": 126644,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 126644,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 126644,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 126650,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 126650,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 126656,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 126656,
    "velocity": 103
  },
  {
    "note": 77,
    "time": 126656,
    "velocity": 103
  },
  {
    "note": 29,
    "time": 126656,
    "velocity": 91
  },
  {
    "note": 41,
    "time": 126656,
    "velocity": 90
  },
  {
    "note": 65,
    "time": 126714,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 126714,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 126714,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 126720,
    "velocity": 102
  },
  {
    "note": 71,
    "time": 126720,
    "velocity": 101
  },
  {
    "note": 79,
    "time": 126720,
    "velocity": 101
  },
  {
    "note": 29,
    "time": 126772,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 126772,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 126778,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 126778,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 126778,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 126784,
    "velocity": 102
  },
  {
    "note": 73,
    "time": 126784,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 126784,
    "velocity": 104
  },
  {
    "note": 26,
    "time": 126784,
    "velocity": 88
  },
  {
    "note": 38,
    "time": 126784,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 126842,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 126842,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 126842,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 126848,
    "velocity": 103
  },
  {
    "note": 74,
    "time": 126848,
    "velocity": 102
  },
  {
    "note": 83,
    "time": 126848,
    "velocity": 101
  },
  {
    "note": 26,
    "time": 126900,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 126900,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 126906,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 126906,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 126906,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 126912,
    "velocity": 103
  },
  {
    "note": 76,
    "time": 126912,
    "velocity": 103
  },
  {
    "note": 85,
    "time": 126912,
    "velocity": 107
  },
  {
    "note": 33,
    "time": 126912,
    "velocity": 111
  },
  {
    "note": 45,
    "time": 126912,
    "velocity": 112
  },
  {
    "note": 73,
    "time": 126970,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 126970,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 126970,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 126976,
    "velocity": 100
  },
  {
    "note": 77,
    "time": 126976,
    "velocity": 102
  },
  {
    "note": 86,
    "time": 126976,
    "velocity": 102
  },
  {
    "note": 74,
    "time": 127034,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 127034,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 127034,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 127040,
    "velocity": 102
  },
  {
    "note": 79,
    "time": 127040,
    "velocity": 100
  },
  {
    "note": 88,
    "time": 127040,
    "velocity": 100
  },
  {
    "note": 76,
    "time": 127098,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 127098,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 127098,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 127104,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 127104,
    "velocity": 101
  },
  {
    "note": 89,
    "time": 127104,
    "velocity": 103
  },
  {
    "note": 33,
    "time": 127143,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 127143,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 127162,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 127162,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 127162,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 127168,
    "velocity": 107
  },
  {
    "note": 82,
    "time": 127168,
    "velocity": 104
  },
  {
    "note": 91,
    "time": 127168,
    "velocity": 107
  },
  {
    "note": 26,
    "time": 127168,
    "velocity": 82
  },
  {
    "note": 38,
    "time": 127168,
    "velocity": 85
  },
  {
    "note": 58,
    "time": 127232,
    "velocity": 86
  },
  {
    "note": 70,
    "time": 127232,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 127284,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 127284,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 127284,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 127290,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 127290,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 127296,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 127296,
    "velocity": 90
  },
  {
    "note": 89,
    "time": 127296,
    "velocity": 88
  },
  {
    "note": 57,
    "time": 127296,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 127296,
    "velocity": 90
  },
  {
    "note": 77,
    "time": 127354,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 127354,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 127354,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127354,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 127354,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 127360,
    "velocity": 91
  },
  {
    "note": 79,
    "time": 127360,
    "velocity": 90
  },
  {
    "note": 88,
    "time": 127360,
    "velocity": 92
  },
  {
    "note": 55,
    "time": 127360,
    "velocity": 89
  },
  {
    "note": 67,
    "time": 127360,
    "velocity": 91
  },
  {
    "note": 76,
    "time": 127418,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 127418,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 127418,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 127418,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 127418,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 127424,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 127424,
    "velocity": 100
  },
  {
    "note": 89,
    "time": 127424,
    "velocity": 100
  },
  {
    "note": 53,
    "time": 127424,
    "velocity": 93
  },
  {
    "note": 65,
    "time": 127424,
    "velocity": 92
  },
  {
    "note": 53,
    "time": 127482,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 127482,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127488,
    "velocity": 106
  },
  {
    "note": 69,
    "time": 127488,
    "velocity": 106
  },
  {
    "note": 77,
    "time": 127540,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 127540,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 127540,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127546,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 127546,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 127552,
    "velocity": 83
  },
  {
    "note": 76,
    "time": 127552,
    "velocity": 85
  },
  {
    "note": 85,
    "time": 127552,
    "velocity": 85
  },
  {
    "note": 52,
    "time": 127552,
    "velocity": 83
  },
  {
    "note": 64,
    "time": 127552,
    "velocity": 84
  },
  {
    "note": 52,
    "time": 127610,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 127610,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127616,
    "velocity": 107
  },
  {
    "note": 69,
    "time": 127616,
    "velocity": 108
  },
  {
    "note": 73,
    "time": 127668,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 127668,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 127668,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127674,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 127674,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 127680,
    "velocity": 103
  },
  {
    "note": 77,
    "time": 127680,
    "velocity": 104
  },
  {
    "note": 86,
    "time": 127680,
    "velocity": 103
  },
  {
    "note": 50,
    "time": 127680,
    "velocity": 83
  },
  {
    "note": 62,
    "time": 127680,
    "velocity": 82
  },
  {
    "note": 50,
    "time": 127738,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 127738,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127744,
    "velocity": 110
  },
  {
    "note": 69,
    "time": 127744,
    "velocity": 110
  },
  {
    "note": 74,
    "time": 127796,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 127796,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 127796,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127802,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 127802,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 127808,
    "velocity": 102
  },
  {
    "note": 81,
    "time": 127808,
    "velocity": 103
  },
  {
    "note": 88,
    "time": 127808,
    "velocity": 104
  },
  {
    "note": 49,
    "time": 127808,
    "velocity": 80
  },
  {
    "note": 61,
    "time": 127808,
    "velocity": 77
  },
  {
    "note": 49,
    "time": 127866,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 127866,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127872,
    "velocity": 112
  },
  {
    "note": 69,
    "time": 127872,
    "velocity": 112
  },
  {
    "note": 76,
    "time": 127924,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 127924,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 127924,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 127930,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 127930,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 127936,
    "velocity": 105
  },
  {
    "note": 81,
    "time": 127936,
    "velocity": 105
  },
  {
    "note": 89,
    "time": 127936,
    "velocity": 105
  },
  {
    "note": 50,
    "time": 127936,
    "velocity": 86
  },
  {
    "note": 62,
    "time": 127936,
    "velocity": 84
  },
  {
    "note": 50,
    "time": 127994,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 127994,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128000,
    "velocity": 112
  },
  {
    "note": 69,
    "time": 128000,
    "velocity": 112
  },
  {
    "note": 77,
    "time": 128052,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128052,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 128052,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128058,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128058,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 128064,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 128064,
    "velocity": 101
  },
  {
    "note": 91,
    "time": 128064,
    "velocity": 101
  },
  {
    "note": 52,
    "time": 128064,
    "velocity": 86
  },
  {
    "note": 64,
    "time": 128064,
    "velocity": 84
  },
  {
    "note": 52,
    "time": 128122,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 128122,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128128,
    "velocity": 108
  },
  {
    "note": 69,
    "time": 128128,
    "velocity": 107
  },
  {
    "note": 79,
    "time": 128180,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128180,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 128180,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128186,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128186,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128192,
    "velocity": 106
  },
  {
    "note": 93,
    "time": 128192,
    "velocity": 105
  },
  {
    "note": 53,
    "time": 128192,
    "velocity": 90
  },
  {
    "note": 65,
    "time": 128192,
    "velocity": 88
  },
  {
    "note": 53,
    "time": 128250,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 128250,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128256,
    "velocity": 104
  },
  {
    "note": 69,
    "time": 128256,
    "velocity": 104
  },
  {
    "note": 81,
    "time": 128308,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 128308,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128314,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128314,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 128320,
    "velocity": 77
  },
  {
    "note": 81,
    "time": 128320,
    "velocity": 77
  },
  {
    "note": 85,
    "time": 128320,
    "velocity": 76
  },
  {
    "note": 45,
    "time": 128320,
    "velocity": 72
  },
  {
    "note": 57,
    "time": 128320,
    "velocity": 71
  },
  {
    "note": 45,
    "time": 128378,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128378,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128384,
    "velocity": 116
  },
  {
    "note": 69,
    "time": 128384,
    "velocity": 117
  },
  {
    "note": 73,
    "time": 128436,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128436,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 128436,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128442,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128442,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 128448,
    "velocity": 100
  },
  {
    "note": 81,
    "time": 128448,
    "velocity": 98
  },
  {
    "note": 86,
    "time": 128448,
    "velocity": 98
  },
  {
    "note": 47,
    "time": 128448,
    "velocity": 79
  },
  {
    "note": 59,
    "time": 128448,
    "velocity": 80
  },
  {
    "note": 47,
    "time": 128506,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 128506,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128512,
    "velocity": 115
  },
  {
    "note": 69,
    "time": 128512,
    "velocity": 114
  },
  {
    "note": 74,
    "time": 128564,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128564,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 128564,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128570,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128570,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 128576,
    "velocity": 100
  },
  {
    "note": 81,
    "time": 128576,
    "velocity": 100
  },
  {
    "note": 88,
    "time": 128576,
    "velocity": 101
  },
  {
    "note": 49,
    "time": 128576,
    "velocity": 79
  },
  {
    "note": 61,
    "time": 128576,
    "velocity": 80
  },
  {
    "note": 49,
    "time": 128634,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 128634,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128640,
    "velocity": 114
  },
  {
    "note": 69,
    "time": 128640,
    "velocity": 111
  },
  {
    "note": 26,
    "time": 128654,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 128654,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 128692,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128692,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 128692,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128698,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128698,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 128704,
    "velocity": 105
  },
  {
    "note": 81,
    "time": 128704,
    "velocity": 105
  },
  {
    "note": 89,
    "time": 128704,
    "velocity": 104
  },
  {
    "note": 50,
    "time": 128704,
    "velocity": 83
  },
  {
    "note": 62,
    "time": 128704,
    "velocity": 86
  },
  {
    "note": 50,
    "time": 128762,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 128762,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128768,
    "velocity": 112
  },
  {
    "note": 69,
    "time": 128768,
    "velocity": 113
  },
  {
    "note": 77,
    "time": 128820,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128820,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 128820,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128826,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128826,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 128832,
    "velocity": 92
  },
  {
    "note": 81,
    "time": 128832,
    "velocity": 93
  },
  {
    "note": 88,
    "time": 128832,
    "velocity": 94
  },
  {
    "note": 49,
    "time": 128832,
    "velocity": 80
  },
  {
    "note": 61,
    "time": 128832,
    "velocity": 77
  },
  {
    "note": 49,
    "time": 128890,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 128890,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128896,
    "velocity": 113
  },
  {
    "note": 69,
    "time": 128896,
    "velocity": 109
  },
  {
    "note": 76,
    "time": 128948,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 128948,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 128948,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 128954,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 128954,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 128960,
    "velocity": 104
  },
  {
    "note": 81,
    "time": 128960,
    "velocity": 101
  },
  {
    "note": 89,
    "time": 128960,
    "velocity": 103
  },
  {
    "note": 50,
    "time": 128960,
    "velocity": 84
  },
  {
    "note": 62,
    "time": 128960,
    "velocity": 83
  },
  {
    "note": 50,
    "time": 129018,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 129018,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 129024,
    "velocity": 110
  },
  {
    "note": 69,
    "time": 129024,
    "velocity": 110
  },
  {
    "note": 77,
    "time": 129076,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 129076,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 129076,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 129082,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 129082,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 129088,
    "velocity": 89
  },
  {
    "note": 77,
    "time": 129088,
    "velocity": 89
  },
  {
    "note": 81,
    "time": 129088,
    "velocity": 87
  },
  {
    "note": 86,
    "time": 129088,
    "velocity": 89
  },
  {
    "note": 50,
    "time": 129088,
    "velocity": 71
  },
  {
    "note": 38,
    "time": 129088,
    "velocity": 86
  },
  {
    "note": 47,
    "time": 129088,
    "velocity": 87
  },
  {
    "note": 50,
    "time": 129146,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 129152,
    "velocity": 116
  },
  {
    "note": 69,
    "time": 129152,
    "velocity": 117
  },
  {
    "note": 74,
    "time": 129204,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 129204,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 129204,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 129204,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 129204,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 129204,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 129210,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 129210,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 129216,
    "velocity": 104
  },
  {
    "note": 81,
    "time": 129216,
    "velocity": 102
  },
  {
    "note": 85,
    "time": 129216,
    "velocity": 103
  },
  {
    "note": 88,
    "time": 129216,
    "velocity": 106
  },
  {
    "note": 33,
    "time": 129216,
    "velocity": 77
  },
  {
    "note": 37,
    "time": 129216,
    "velocity": 75
  },
  {
    "note": 40,
    "time": 129216,
    "velocity": 75
  },
  {
    "note": 45,
    "time": 129216,
    "velocity": 78
  },
  {
    "note": 76,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 129332,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 129344,
    "velocity": 94
  },
  {
    "note": 77,
    "time": 129344,
    "velocity": 96
  },
  {
    "note": 81,
    "time": 129344,
    "velocity": 94
  },
  {
    "note": 86,
    "time": 129344,
    "velocity": 94
  },
  {
    "note": 29,
    "time": 129344,
    "velocity": 86
  },
  {
    "note": 33,
    "time": 129344,
    "velocity": 86
  },
  {
    "note": 38,
    "time": 129344,
    "velocity": 83
  },
  {
    "note": 41,
    "time": 129344,
    "velocity": 84
  },
  {
    "note": 74,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 129460,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 129472,
    "velocity": 106
  },
  {
    "note": 79,
    "time": 129472,
    "velocity": 106
  },
  {
    "note": 82,
    "time": 129472,
    "velocity": 108
  },
  {
    "note": 86,
    "time": 129472,
    "velocity": 106
  },
  {
    "note": 31,
    "time": 129472,
    "velocity": 111
  },
  {
    "note": 34,
    "time": 129472,
    "velocity": 110
  },
  {
    "note": 38,
    "time": 129472,
    "velocity": 111
  },
  {
    "note": 43,
    "time": 129472,
    "velocity": 109
  },
  {
    "note": 74,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 129588,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 129600,
    "velocity": 102
  },
  {
    "note": 76,
    "time": 129600,
    "velocity": 100
  },
  {
    "note": 81,
    "time": 129600,
    "velocity": 101
  },
  {
    "note": 85,
    "time": 129600,
    "velocity": 100
  },
  {
    "note": 33,
    "time": 129600,
    "velocity": 112
  },
  {
    "note": 37,
    "time": 129600,
    "velocity": 114
  },
  {
    "note": 40,
    "time": 129600,
    "velocity": 113
  },
  {
    "note": 45,
    "time": 129600,
    "velocity": 112
  },
  {
    "note": 73,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 129716,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 129728,
    "velocity": 116
  },
  {
    "note": 77,
    "time": 129728,
    "velocity": 117
  },
  {
    "note": 81,
    "time": 129728,
    "velocity": 117
  },
  {
    "note": 86,
    "time": 129728,
    "velocity": 117
  },
  {
    "note": 29,
    "time": 129728,
    "velocity": 103
  },
  {
    "note": 33,
    "time": 129728,
    "velocity": 103
  },
  {
    "note": 38,
    "time": 129728,
    "velocity": 103
  },
  {
    "note": 41,
    "time": 129728,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 129844,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 129856,
    "velocity": 122
  },
  {
    "note": 81,
    "time": 129856,
    "velocity": 122
  },
  {
    "note": 86,
    "time": 129856,
    "velocity": 125
  },
  {
    "note": 89,
    "time": 129856,
    "velocity": 124
  },
  {
    "note": 26,
    "time": 129856,
    "velocity": 103
  },
  {
    "note": 29,
    "time": 129856,
    "velocity": 104
  },
  {
    "note": 33,
    "time": 129856,
    "velocity": 103
  },
  {
    "note": 38,
    "time": 129856,
    "velocity": 102
  },
  {
    "note": 77,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 129972,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 129984,
    "velocity": 114
  },
  {
    "note": 88,
    "time": 129984,
    "velocity": 115
  },
  {
    "note": 74,
    "time": 129984,
    "velocity": 88
  },
  {
    "note": 82,
    "time": 129984,
    "velocity": 89
  },
  {
    "note": 86,
    "time": 129984,
    "velocity": 90
  },
  {
    "note": 31,
    "time": 129984,
    "velocity": 127
  },
  {
    "note": 34,
    "time": 129984,
    "velocity": 127
  },
  {
    "note": 38,
    "time": 129984,
    "velocity": 127
  },
  {
    "note": 40,
    "time": 129984,
    "velocity": 127
  },
  {
    "note": 43,
    "time": 129984,
    "velocity": 127
  },
  {
    "note": 74,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 130100,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 130112,
    "velocity": 94
  },
  {
    "note": 81,
    "time": 130112,
    "velocity": 92
  },
  {
    "note": 84,
    "time": 130112,
    "velocity": 94
  },
  {
    "note": 33,
    "time": 130112,
    "velocity": 125
  },
  {
    "note": 36,
    "time": 130112,
    "velocity": 125
  },
  {
    "note": 40,
    "time": 130112,
    "velocity": 127
  },
  {
    "note": 45,
    "time": 130112,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 130215,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 130215,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 130228,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 130228,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 130228,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 130228,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 130228,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 130228,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 130228,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 130240,
    "velocity": 119
  },
  {
    "note": 77,
    "time": 130240,
    "velocity": 122
  },
  {
    "note": 82,
    "time": 130240,
    "velocity": 119
  },
  {
    "note": 86,
    "time": 130240,
    "velocity": 122
  },
  {
    "note": 34,
    "time": 130240,
    "velocity": 127
  },
  {
    "note": 38,
    "time": 130240,
    "velocity": 127
  },
  {
    "note": 41,
    "time": 130240,
    "velocity": 127
  },
  {
    "note": 46,
    "time": 130240,
    "velocity": 127
  },
  {
    "note": 74,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 130702,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 130784,
    "velocity": 86
  },
  {
    "note": 65,
    "time": 130784,
    "velocity": 87
  },
  {
    "note": 89,
    "time": 130813,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 130813,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 130816,
    "velocity": 100
  },
  {
    "note": 67,
    "time": 130816,
    "velocity": 100
  },
  {
    "note": 91,
    "time": 130845,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 130845,
    "velocity": 0
  },
  {
    "note": 93,
    "time": 130848,
    "velocity": 102
  },
  {
    "note": 69,
    "time": 130848,
    "velocity": 103
  },
  {
    "note": 93,
    "time": 130877,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 130877,
    "velocity": 0
  },
  {
    "note": 94,
    "time": 130880,
    "velocity": 127
  },
  {
    "note": 70,
    "time": 130880,
    "velocity": 127
  },
  {
    "note": 94,
    "time": 130909,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 130909,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 130912,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 130912,
    "velocity": 69
  },
  {
    "note": 81,
    "time": 130941,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 130941,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 130944,
    "velocity": 95
  },
  {
    "note": 58,
    "time": 130944,
    "velocity": 98
  },
  {
    "note": 82,
    "time": 130973,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 130973,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 130976,
    "velocity": 104
  },
  {
    "note": 60,
    "time": 130976,
    "velocity": 101
  },
  {
    "note": 84,
    "time": 131005,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 131005,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 131008,
    "velocity": 107
  },
  {
    "note": 62,
    "time": 131008,
    "velocity": 106
  },
  {
    "note": 86,
    "time": 131037,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 131037,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 131040,
    "velocity": 90
  },
  {
    "note": 60,
    "time": 131040,
    "velocity": 91
  },
  {
    "note": 84,
    "time": 131069,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 131069,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 131072,
    "velocity": 102
  },
  {
    "note": 62,
    "time": 131072,
    "velocity": 100
  },
  {
    "note": 86,
    "time": 131101,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 131101,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 131104,
    "velocity": 103
  },
  {
    "note": 63,
    "time": 131104,
    "velocity": 102
  },
  {
    "note": 87,
    "time": 131133,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 131133,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 131136,
    "velocity": 102
  },
  {
    "note": 65,
    "time": 131136,
    "velocity": 101
  },
  {
    "note": 89,
    "time": 131165,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 131165,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 131168,
    "velocity": 68
  },
  {
    "note": 53,
    "time": 131168,
    "velocity": 72
  },
  {
    "note": 77,
    "time": 131197,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 131197,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 131200,
    "velocity": 97
  },
  {
    "note": 55,
    "time": 131200,
    "velocity": 97
  },
  {
    "note": 79,
    "time": 131229,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 131229,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 131232,
    "velocity": 102
  },
  {
    "note": 57,
    "time": 131232,
    "velocity": 103
  },
  {
    "note": 81,
    "time": 131261,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 131261,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 131264,
    "velocity": 126
  },
  {
    "note": 70,
    "time": 131264,
    "velocity": 125
  },
  {
    "note": 82,
    "time": 131293,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 131293,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 131296,
    "velocity": 94
  },
  {
    "note": 69,
    "time": 131296,
    "velocity": 96
  },
  {
    "note": 81,
    "time": 131325,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 131325,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 131328,
    "velocity": 101
  },
  {
    "note": 70,
    "time": 131328,
    "velocity": 100
  },
  {
    "note": 82,
    "time": 131357,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 131357,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 131360,
    "velocity": 102
  },
  {
    "note": 72,
    "time": 131360,
    "velocity": 100
  },
  {
    "note": 84,
    "time": 131389,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 131389,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 131392,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 131392,
    "velocity": 102
  },
  {
    "note": 86,
    "time": 131421,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 131421,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 131424,
    "velocity": 86
  },
  {
    "note": 69,
    "time": 131424,
    "velocity": 83
  },
  {
    "note": 81,
    "time": 131453,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 131453,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 131456,
    "velocity": 88
  },
  {
    "note": 67,
    "time": 131456,
    "velocity": 86
  },
  {
    "note": 79,
    "time": 131485,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 131485,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 131488,
    "velocity": 87
  },
  {
    "note": 65,
    "time": 131488,
    "velocity": 88
  },
  {
    "note": 77,
    "time": 131517,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 131517,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 131520,
    "velocity": 93
  },
  {
    "note": 63,
    "time": 131520,
    "velocity": 91
  },
  {
    "note": 75,
    "time": 131549,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 131549,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 131552,
    "velocity": 106
  },
  {
    "note": 67,
    "time": 131552,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 131581,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 131581,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 131584,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 131584,
    "velocity": 104
  },
  {
    "note": 81,
    "time": 131613,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 131613,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 131616,
    "velocity": 101
  },
  {
    "note": 70,
    "time": 131616,
    "velocity": 101
  },
  {
    "note": 82,
    "time": 131645,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 131645,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 131648,
    "velocity": 102
  },
  {
    "note": 72,
    "time": 131648,
    "velocity": 104
  },
  {
    "note": 84,
    "time": 131677,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 131677,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 131680,
    "velocity": 86
  },
  {
    "note": 67,
    "time": 131680,
    "velocity": 85
  },
  {
    "note": 79,
    "time": 131709,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 131709,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 131712,
    "velocity": 88
  },
  {
    "note": 65,
    "time": 131712,
    "velocity": 85
  },
  {
    "note": 77,
    "time": 131741,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 131741,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 131744,
    "velocity": 87
  },
  {
    "note": 63,
    "time": 131744,
    "velocity": 90
  },
  {
    "note": 75,
    "time": 131773,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 131773,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 131776,
    "velocity": 93
  },
  {
    "note": 62,
    "time": 131776,
    "velocity": 95
  },
  {
    "note": 74,
    "time": 131805,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 131805,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 131808,
    "velocity": 103
  },
  {
    "note": 53,
    "time": 131808,
    "velocity": 76
  },
  {
    "note": 77,
    "time": 131837,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 131837,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 131840,
    "velocity": 101
  },
  {
    "note": 55,
    "time": 131840,
    "velocity": 97
  },
  {
    "note": 79,
    "time": 131869,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 131869,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 131872,
    "velocity": 100
  },
  {
    "note": 57,
    "time": 131872,
    "velocity": 103
  },
  {
    "note": 81,
    "time": 131901,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 131901,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 131904,
    "velocity": 126
  },
  {
    "note": 58,
    "time": 131904,
    "velocity": 127
  },
  {
    "note": 82,
    "time": 131933,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 131933,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 131936,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 131936,
    "velocity": 94
  },
  {
    "note": 69,
    "time": 131965,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 131965,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 131968,
    "velocity": 96
  },
  {
    "note": 58,
    "time": 131968,
    "velocity": 99
  },
  {
    "note": 70,
    "time": 131997,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 131997,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 132000,
    "velocity": 103
  },
  {
    "note": 60,
    "time": 132000,
    "velocity": 100
  },
  {
    "note": 72,
    "time": 132029,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 132029,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 132032,
    "velocity": 104
  },
  {
    "note": 62,
    "time": 132032,
    "velocity": 104
  },
  {
    "note": 74,
    "time": 132061,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 132061,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 132064,
    "velocity": 90
  },
  {
    "note": 48,
    "time": 132064,
    "velocity": 69
  },
  {
    "note": 72,
    "time": 132093,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 132093,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 132096,
    "velocity": 103
  },
  {
    "note": 50,
    "time": 132096,
    "velocity": 95
  },
  {
    "note": 74,
    "time": 132125,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 132125,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 132128,
    "velocity": 101
  },
  {
    "note": 51,
    "time": 132128,
    "velocity": 98
  },
  {
    "note": 75,
    "time": 132157,
    "velocity": 0
  },
  {
    "note": 51,
    "time": 132157,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 132160,
    "velocity": 126
  },
  {
    "note": 53,
    "time": 132160,
    "velocity": 126
  },
  {
    "note": 77,
    "time": 132189,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 132189,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 132192,
    "velocity": 72
  },
  {
    "note": 53,
    "time": 132192,
    "velocity": 98
  },
  {
    "note": 65,
    "time": 132221,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 132221,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 132224,
    "velocity": 96
  },
  {
    "note": 55,
    "time": 132224,
    "velocity": 101
  },
  {
    "note": 67,
    "time": 132253,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 132253,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 132256,
    "velocity": 102
  },
  {
    "note": 57,
    "time": 132256,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 132285,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 132285,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 132288,
    "velocity": 104
  },
  {
    "note": 58,
    "time": 132317,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 132320,
    "velocity": 86
  },
  {
    "note": 57,
    "time": 132320,
    "velocity": 94
  },
  {
    "note": 81,
    "time": 132349,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 132349,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 132352,
    "velocity": 97
  },
  {
    "note": 58,
    "time": 132352,
    "velocity": 99
  },
  {
    "note": 82,
    "time": 132381,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 132381,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 132384,
    "velocity": 100
  },
  {
    "note": 60,
    "time": 132384,
    "velocity": 101
  },
  {
    "note": 84,
    "time": 132413,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 132413,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 132416,
    "velocity": 101
  },
  {
    "note": 62,
    "time": 132416,
    "velocity": 101
  },
  {
    "note": 86,
    "time": 132445,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 132445,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 132448,
    "velocity": 68
  },
  {
    "note": 60,
    "time": 132448,
    "velocity": 88
  },
  {
    "note": 69,
    "time": 132477,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 132477,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 132480,
    "velocity": 85
  },
  {
    "note": 58,
    "time": 132480,
    "velocity": 90
  },
  {
    "note": 67,
    "time": 132509,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 132509,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 132512,
    "velocity": 86
  },
  {
    "note": 57,
    "time": 132512,
    "velocity": 88
  },
  {
    "note": 65,
    "time": 132541,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 132541,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 132544,
    "velocity": 105
  },
  {
    "note": 55,
    "time": 132544,
    "velocity": 90
  },
  {
    "note": 67,
    "time": 132573,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 132573,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 132576,
    "velocity": 124
  },
  {
    "note": 58,
    "time": 132576,
    "velocity": 103
  },
  {
    "note": 82,
    "time": 132605,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 132605,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 132608,
    "velocity": 105
  },
  {
    "note": 60,
    "time": 132608,
    "velocity": 100
  },
  {
    "note": 84,
    "time": 132637,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 132637,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 132640,
    "velocity": 105
  },
  {
    "note": 62,
    "time": 132640,
    "velocity": 102
  },
  {
    "note": 86,
    "time": 132669,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 132669,
    "velocity": 0
  },
  {
    "note": 87,
    "time": 132672,
    "velocity": 102
  },
  {
    "note": 63,
    "time": 132672,
    "velocity": 100
  },
  {
    "note": 87,
    "time": 132701,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 132701,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 132704,
    "velocity": 72
  },
  {
    "note": 62,
    "time": 132704,
    "velocity": 94
  },
  {
    "note": 74,
    "time": 132733,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 132733,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 132736,
    "velocity": 84
  },
  {
    "note": 60,
    "time": 132736,
    "velocity": 90
  },
  {
    "note": 72,
    "time": 132765,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 132765,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 132768,
    "velocity": 90
  },
  {
    "note": 58,
    "time": 132768,
    "velocity": 91
  },
  {
    "note": 70,
    "time": 132797,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 132797,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 132800,
    "velocity": 87
  },
  {
    "note": 57,
    "time": 132800,
    "velocity": 93
  },
  {
    "note": 65,
    "time": 132829,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 132829,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 132832,
    "velocity": 119
  },
  {
    "note": 60,
    "time": 132832,
    "velocity": 103
  },
  {
    "note": 84,
    "time": 132861,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 132861,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 132864,
    "velocity": 107
  },
  {
    "note": 62,
    "time": 132864,
    "velocity": 102
  },
  {
    "note": 86,
    "time": 132893,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 132893,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 132896,
    "velocity": 103
  },
  {
    "note": 64,
    "time": 132896,
    "velocity": 103
  },
  {
    "note": 88,
    "time": 132925,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 132925,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 132928,
    "velocity": 127
  },
  {
    "note": 90,
    "time": 132928,
    "velocity": 127
  },
  {
    "note": 66,
    "time": 132928,
    "velocity": 126
  },
  {
    "note": 78,
    "time": 132957,
    "velocity": 0
  },
  {
    "note": 90,
    "time": 132957,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 132957,
    "velocity": 0
  },
  {
    "note": 75,
    "time": 132960,
    "velocity": 72
  },
  {
    "note": 63,
    "time": 132960,
    "velocity": 86
  },
  {
    "note": 75,
    "time": 132989,
    "velocity": 0
  },
  {
    "note": 63,
    "time": 132989,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 132992,
    "velocity": 87
  },
  {
    "note": 62,
    "time": 132992,
    "velocity": 88
  },
  {
    "note": 74,
    "time": 133021,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 133021,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 133024,
    "velocity": 89
  },
  {
    "note": 60,
    "time": 133024,
    "velocity": 90
  },
  {
    "note": 72,
    "time": 133053,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 133053,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 133056,
    "velocity": 92
  },
  {
    "note": 58,
    "time": 133056,
    "velocity": 90
  },
  {
    "note": 70,
    "time": 133085,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 133085,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 133088,
    "velocity": 115
  },
  {
    "note": 66,
    "time": 133088,
    "velocity": 114
  },
  {
    "note": 78,
    "time": 133117,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 133117,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 133120,
    "velocity": 104
  },
  {
    "note": 67,
    "time": 133120,
    "velocity": 105
  },
  {
    "note": 79,
    "time": 133149,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 133149,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 133152,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 133152,
    "velocity": 102
  },
  {
    "note": 81,
    "time": 133181,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 133181,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 133184,
    "velocity": 101
  },
  {
    "note": 82,
    "time": 133184,
    "velocity": 88
  },
  {
    "note": 70,
    "time": 133184,
    "velocity": 100
  },
  {
    "note": 70,
    "time": 133184,
    "velocity": 87
  },
  {
    "note": 82,
    "time": 133213,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 133213,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 133216,
    "velocity": 100
  },
  {
    "note": 72,
    "time": 133216,
    "velocity": 101
  },
  {
    "note": 82,
    "time": 133242,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 133242,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 133245,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 133245,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 133248,
    "velocity": 109
  },
  {
    "note": 86,
    "time": 133248,
    "velocity": 106
  },
  {
    "note": 82,
    "time": 133248,
    "velocity": 90
  },
  {
    "note": 70,
    "time": 133248,
    "velocity": 89
  },
  {
    "note": 69,
    "time": 133248,
    "velocity": 91
  },
  {
    "note": 82,
    "time": 133277,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 133277,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 133280,
    "velocity": 86
  },
  {
    "note": 67,
    "time": 133280,
    "velocity": 85
  },
  {
    "note": 74,
    "time": 133306,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 133306,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 133306,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 133309,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 133309,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 133312,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 133312,
    "velocity": 106
  },
  {
    "note": 82,
    "time": 133312,
    "velocity": 107
  },
  {
    "note": 88,
    "time": 133312,
    "velocity": 105
  },
  {
    "note": 37,
    "time": 133312,
    "velocity": 73
  },
  {
    "note": 43,
    "time": 133312,
    "velocity": 72
  },
  {
    "note": 46,
    "time": 133312,
    "velocity": 72
  },
  {
    "note": 49,
    "time": 133312,
    "velocity": 72
  },
  {
    "note": 67,
    "time": 133568,
    "velocity": 107
  },
  {
    "note": 70,
    "time": 133568,
    "velocity": 107
  },
  {
    "note": 76,
    "time": 133568,
    "velocity": 108
  },
  {
    "note": 49,
    "time": 133568,
    "velocity": 107
  },
  {
    "note": 55,
    "time": 133568,
    "velocity": 110
  },
  {
    "note": 58,
    "time": 133568,
    "velocity": 109
  },
  {
    "note": 64,
    "time": 133568,
    "velocity": 110
  },
  {
    "note": 37,
    "time": 133774,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 133774,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 133774,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 133774,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 133824,
    "velocity": 77
  },
  {
    "note": 41,
    "time": 133824,
    "velocity": 78
  },
  {
    "note": 76,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 134030,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 134080,
    "velocity": 75
  },
  {
    "note": 77,
    "time": 134080,
    "velocity": 75
  },
  {
    "note": 81,
    "time": 134080,
    "velocity": 75
  },
  {
    "note": 86,
    "time": 134080,
    "velocity": 77
  },
  {
    "note": 53,
    "time": 134080,
    "velocity": 71
  },
  {
    "note": 57,
    "time": 134080,
    "velocity": 73
  },
  {
    "note": 62,
    "time": 134080,
    "velocity": 74
  },
  {
    "note": 29,
    "time": 134170,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 134170,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 134208,
    "velocity": 95
  },
  {
    "note": 50,
    "time": 134208,
    "velocity": 95
  },
  {
    "note": 74,
    "time": 134311,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 134311,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 134311,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 134311,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 134311,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 134311,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 134311,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 134324,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 134324,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 134336,
    "velocity": 50
  },
  {
    "note": 77,
    "time": 134336,
    "velocity": 48
  },
  {
    "note": 83,
    "time": 134336,
    "velocity": 49
  },
  {
    "note": 86,
    "time": 134336,
    "velocity": 51
  },
  {
    "note": 32,
    "time": 134336,
    "velocity": 38
  },
  {
    "note": 35,
    "time": 134336,
    "velocity": 37
  },
  {
    "note": 38,
    "time": 134336,
    "velocity": 36
  },
  {
    "note": 44,
    "time": 134336,
    "velocity": 37
  },
  {
    "note": 71,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 32,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 35,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 44,
    "time": 134798,
    "velocity": 0
  },
  {
    "note": 44,
    "time": 134912,
    "velocity": 70
  },
  {
    "note": 56,
    "time": 134912,
    "velocity": 70
  },
  {
    "note": 44,
    "time": 134970,
    "velocity": 0
  },
  {
    "note": 56,
    "time": 134970,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 134976,
    "velocity": 85
  },
  {
    "note": 59,
    "time": 134976,
    "velocity": 85
  },
  {
    "note": 47,
    "time": 135034,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 135034,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 135040,
    "velocity": 69
  },
  {
    "note": 53,
    "time": 135040,
    "velocity": 72
  },
  {
    "note": 41,
    "time": 135098,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 135098,
    "velocity": 0
  },
  {
    "note": 44,
    "time": 135104,
    "velocity": 92
  },
  {
    "note": 56,
    "time": 135104,
    "velocity": 92
  },
  {
    "note": 44,
    "time": 135162,
    "velocity": 0
  },
  {
    "note": 56,
    "time": 135162,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 135168,
    "velocity": 75
  },
  {
    "note": 50,
    "time": 135168,
    "velocity": 74
  },
  {
    "note": 38,
    "time": 135226,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 135226,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 135232,
    "velocity": 93
  },
  {
    "note": 53,
    "time": 135232,
    "velocity": 94
  },
  {
    "note": 41,
    "time": 135290,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 135290,
    "velocity": 0
  },
  {
    "note": 35,
    "time": 135296,
    "velocity": 78
  },
  {
    "note": 47,
    "time": 135296,
    "velocity": 77
  },
  {
    "note": 35,
    "time": 135354,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 135354,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 135360,
    "velocity": 101
  },
  {
    "note": 50,
    "time": 135360,
    "velocity": 98
  },
  {
    "note": 38,
    "time": 135418,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 135418,
    "velocity": 0
  },
  {
    "note": 32,
    "time": 135424,
    "velocity": 78
  },
  {
    "note": 44,
    "time": 135424,
    "velocity": 81
  },
  {
    "note": 32,
    "time": 135482,
    "velocity": 0
  },
  {
    "note": 44,
    "time": 135482,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 135488,
    "velocity": 97
  },
  {
    "note": 45,
    "time": 135488,
    "velocity": 98
  },
  {
    "note": 33,
    "time": 135604,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 135604,
    "velocity": 0
  },
  {
    "note": 28,
    "time": 135616,
    "velocity": 100
  },
  {
    "note": 40,
    "time": 135616,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 135744,
    "velocity": 101
  },
  {
    "note": 76,
    "time": 135744,
    "velocity": 99
  },
  {
    "note": 80,
    "time": 135744,
    "velocity": 99
  },
  {
    "note": 83,
    "time": 135744,
    "velocity": 99
  },
  {
    "note": 86,
    "time": 135744,
    "velocity": 98
  },
  {
    "note": 52,
    "time": 135744,
    "velocity": 98
  },
  {
    "note": 56,
    "time": 135744,
    "velocity": 100
  },
  {
    "note": 59,
    "time": 135744,
    "velocity": 98
  },
  {
    "note": 62,
    "time": 135744,
    "velocity": 97
  },
  {
    "note": 64,
    "time": 135744,
    "velocity": 101
  },
  {
    "note": 74,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 56,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 135824,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 135872,
    "velocity": 45
  },
  {
    "note": 80,
    "time": 135872,
    "velocity": 44
  },
  {
    "note": 88,
    "time": 135872,
    "velocity": 44
  },
  {
    "note": 81,
    "time": 135872,
    "velocity": 44
  },
  {
    "note": 52,
    "time": 135872,
    "velocity": 43
  },
  {
    "note": 57,
    "time": 135872,
    "velocity": 42
  },
  {
    "note": 60,
    "time": 135872,
    "velocity": 41
  },
  {
    "note": 69,
    "time": 135872,
    "velocity": 43
  },
  {
    "note": 81,
    "time": 136218,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 136218,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 136256,
    "velocity": 42
  },
  {
    "note": 67,
    "time": 136256,
    "velocity": 45
  },
  {
    "note": 79,
    "time": 136314,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 136314,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 136320,
    "velocity": 43
  },
  {
    "note": 65,
    "time": 136320,
    "velocity": 44
  },
  {
    "note": 80,
    "time": 136334,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 136334,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 136334,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 136378,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 136378,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 136384,
    "velocity": 37
  },
  {
    "note": 72,
    "time": 136384,
    "velocity": 45
  },
  {
    "note": 55,
    "time": 136384,
    "velocity": 50
  },
  {
    "note": 64,
    "time": 136384,
    "velocity": 47
  },
  {
    "note": 28,
    "time": 136447,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 136447,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 136635,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 136635,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 136635,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 136635,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 136846,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 136846,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 136846,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 136928,
    "velocity": 57
  },
  {
    "note": 79,
    "time": 136928,
    "velocity": 54
  },
  {
    "note": 67,
    "time": 136957,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 136957,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 136960,
    "velocity": 57
  },
  {
    "note": 65,
    "time": 136960,
    "velocity": 55
  },
  {
    "note": 77,
    "time": 136989,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 136992,
    "velocity": 65
  },
  {
    "note": 79,
    "time": 136992,
    "velocity": 65
  },
  {
    "note": 65,
    "time": 136992,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 137021,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 137021,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 137024,
    "velocity": 57
  },
  {
    "note": 64,
    "time": 137024,
    "velocity": 59
  },
  {
    "note": 76,
    "time": 137040,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 137056,
    "velocity": 62
  },
  {
    "note": 76,
    "time": 137056,
    "velocity": 64
  },
  {
    "note": 64,
    "time": 137056,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 137085,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 137085,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 137088,
    "velocity": 60
  },
  {
    "note": 62,
    "time": 137088,
    "velocity": 58
  },
  {
    "note": 74,
    "time": 137117,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 137120,
    "velocity": 66
  },
  {
    "note": 76,
    "time": 137120,
    "velocity": 64
  },
  {
    "note": 62,
    "time": 137120,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 137149,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 137149,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 137152,
    "velocity": 58
  },
  {
    "note": 60,
    "time": 137152,
    "velocity": 61
  },
  {
    "note": 72,
    "time": 137168,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 137184,
    "velocity": 74
  },
  {
    "note": 81,
    "time": 137184,
    "velocity": 73
  },
  {
    "note": 60,
    "time": 137184,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 137213,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 137213,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 137216,
    "velocity": 61
  },
  {
    "note": 67,
    "time": 137216,
    "velocity": 73
  },
  {
    "note": 79,
    "time": 137245,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 137248,
    "velocity": 64
  },
  {
    "note": 81,
    "time": 137248,
    "velocity": 64
  },
  {
    "note": 67,
    "time": 137248,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 137277,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 137277,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 137280,
    "velocity": 58
  },
  {
    "note": 65,
    "time": 137280,
    "velocity": 62
  },
  {
    "note": 77,
    "time": 137296,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 137312,
    "velocity": 61
  },
  {
    "note": 77,
    "time": 137312,
    "velocity": 61
  },
  {
    "note": 65,
    "time": 137312,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 137341,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 137341,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 137344,
    "velocity": 59
  },
  {
    "note": 64,
    "time": 137344,
    "velocity": 61
  },
  {
    "note": 76,
    "time": 137373,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 137376,
    "velocity": 63
  },
  {
    "note": 77,
    "time": 137376,
    "velocity": 63
  },
  {
    "note": 64,
    "time": 137376,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 137405,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 137405,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 137408,
    "velocity": 59
  },
  {
    "note": 62,
    "time": 137408,
    "velocity": 62
  },
  {
    "note": 74,
    "time": 137424,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 137440,
    "velocity": 75
  },
  {
    "note": 83,
    "time": 137440,
    "velocity": 76
  },
  {
    "note": 62,
    "time": 137440,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 137469,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 137469,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 137472,
    "velocity": 61
  },
  {
    "note": 69,
    "time": 137472,
    "velocity": 74
  },
  {
    "note": 81,
    "time": 137501,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 137504,
    "velocity": 64
  },
  {
    "note": 83,
    "time": 137504,
    "velocity": 64
  },
  {
    "note": 69,
    "time": 137504,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 137533,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 137533,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 137536,
    "velocity": 58
  },
  {
    "note": 67,
    "time": 137536,
    "velocity": 61
  },
  {
    "note": 79,
    "time": 137552,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 137568,
    "velocity": 60
  },
  {
    "note": 79,
    "time": 137568,
    "velocity": 62
  },
  {
    "note": 67,
    "time": 137568,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 137597,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 137597,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 137600,
    "velocity": 61
  },
  {
    "note": 65,
    "time": 137600,
    "velocity": 59
  },
  {
    "note": 77,
    "time": 137629,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 137632,
    "velocity": 66
  },
  {
    "note": 79,
    "time": 137632,
    "velocity": 65
  },
  {
    "note": 65,
    "time": 137632,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 137661,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 137661,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 137664,
    "velocity": 60
  },
  {
    "note": 64,
    "time": 137664,
    "velocity": 63
  },
  {
    "note": 76,
    "time": 137680,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 137696,
    "velocity": 75
  },
  {
    "note": 84,
    "time": 137696,
    "velocity": 74
  },
  {
    "note": 64,
    "time": 137696,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 137725,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 137725,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 137728,
    "velocity": 61
  },
  {
    "note": 71,
    "time": 137728,
    "velocity": 74
  },
  {
    "note": 83,
    "time": 137757,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 137760,
    "velocity": 66
  },
  {
    "note": 84,
    "time": 137760,
    "velocity": 66
  },
  {
    "note": 71,
    "time": 137760,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 137789,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 137789,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 137792,
    "velocity": 60
  },
  {
    "note": 69,
    "time": 137792,
    "velocity": 61
  },
  {
    "note": 81,
    "time": 137808,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 137824,
    "velocity": 72
  },
  {
    "note": 86,
    "time": 137824,
    "velocity": 70
  },
  {
    "note": 69,
    "time": 137824,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 137853,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 137853,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 137856,
    "velocity": 62
  },
  {
    "note": 72,
    "time": 137856,
    "velocity": 66
  },
  {
    "note": 84,
    "time": 137885,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 137888,
    "velocity": 65
  },
  {
    "note": 86,
    "time": 137888,
    "velocity": 66
  },
  {
    "note": 72,
    "time": 137888,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 137917,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 137917,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 137920,
    "velocity": 61
  },
  {
    "note": 71,
    "time": 137920,
    "velocity": 63
  },
  {
    "note": 83,
    "time": 137936,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 137952,
    "velocity": 70
  },
  {
    "note": 88,
    "time": 137952,
    "velocity": 69
  },
  {
    "note": 71,
    "time": 137952,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 137981,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 137981,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 137984,
    "velocity": 62
  },
  {
    "note": 74,
    "time": 137984,
    "velocity": 68
  },
  {
    "note": 86,
    "time": 138013,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 138016,
    "velocity": 65
  },
  {
    "note": 88,
    "time": 138016,
    "velocity": 68
  },
  {
    "note": 74,
    "time": 138016,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 138045,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 138045,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 138048,
    "velocity": 56
  },
  {
    "note": 72,
    "time": 138048,
    "velocity": 59
  },
  {
    "note": 84,
    "time": 138064,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 138080,
    "velocity": 70
  },
  {
    "note": 89,
    "time": 138080,
    "velocity": 70
  },
  {
    "note": 72,
    "time": 138080,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 138109,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 138109,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 138112,
    "velocity": 62
  },
  {
    "note": 76,
    "time": 138112,
    "velocity": 68
  },
  {
    "note": 88,
    "time": 138141,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 138144,
    "velocity": 66
  },
  {
    "note": 89,
    "time": 138144,
    "velocity": 63
  },
  {
    "note": 76,
    "time": 138144,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 138173,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 138173,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 138176,
    "velocity": 62
  },
  {
    "note": 74,
    "time": 138176,
    "velocity": 62
  },
  {
    "note": 86,
    "time": 138192,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 138208,
    "velocity": 69
  },
  {
    "note": 91,
    "time": 138208,
    "velocity": 68
  },
  {
    "note": 74,
    "time": 138208,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 138237,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 138237,
    "velocity": 0
  },
  {
    "note": 89,
    "time": 138240,
    "velocity": 59
  },
  {
    "note": 77,
    "time": 138240,
    "velocity": 67
  },
  {
    "note": 89,
    "time": 138269,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 138272,
    "velocity": 66
  },
  {
    "note": 91,
    "time": 138272,
    "velocity": 66
  },
  {
    "note": 77,
    "time": 138272,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 138301,
    "velocity": 0
  },
  {
    "note": 91,
    "time": 138301,
    "velocity": 0
  },
  {
    "note": 88,
    "time": 138304,
    "velocity": 59
  },
  {
    "note": 76,
    "time": 138304,
    "velocity": 60
  },
  {
    "note": 88,
    "time": 138320,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138336,
    "velocity": 57
  },
  {
    "note": 84,
    "time": 138336,
    "velocity": 55
  },
  {
    "note": 76,
    "time": 138336,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138365,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 138365,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 138368,
    "velocity": 57
  },
  {
    "note": 71,
    "time": 138368,
    "velocity": 55
  },
  {
    "note": 83,
    "time": 138397,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138400,
    "velocity": 63
  },
  {
    "note": 84,
    "time": 138400,
    "velocity": 66
  },
  {
    "note": 71,
    "time": 138400,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138429,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 138429,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 138432,
    "velocity": 60
  },
  {
    "note": 69,
    "time": 138432,
    "velocity": 59
  },
  {
    "note": 81,
    "time": 138461,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 138464,
    "velocity": 72
  },
  {
    "note": 86,
    "time": 138464,
    "velocity": 69
  },
  {
    "note": 69,
    "time": 138464,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 138493,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 138493,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 138496,
    "velocity": 58
  },
  {
    "note": 72,
    "time": 138496,
    "velocity": 69
  },
  {
    "note": 84,
    "time": 138525,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 138528,
    "velocity": 64
  },
  {
    "note": 86,
    "time": 138528,
    "velocity": 68
  },
  {
    "note": 72,
    "time": 138528,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 138557,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 138557,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 138560,
    "velocity": 60
  },
  {
    "note": 71,
    "time": 138560,
    "velocity": 59
  },
  {
    "note": 83,
    "time": 138589,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 138592,
    "velocity": 57
  },
  {
    "note": 80,
    "time": 138592,
    "velocity": 56
  },
  {
    "note": 71,
    "time": 138592,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 138621,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 138621,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 138624,
    "velocity": 56
  },
  {
    "note": 66,
    "time": 138624,
    "velocity": 53
  },
  {
    "note": 78,
    "time": 138653,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 138656,
    "velocity": 68
  },
  {
    "note": 80,
    "time": 138656,
    "velocity": 65
  },
  {
    "note": 66,
    "time": 138656,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 138685,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 138685,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 138688,
    "velocity": 60
  },
  {
    "note": 64,
    "time": 138688,
    "velocity": 60
  },
  {
    "note": 76,
    "time": 138717,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138720,
    "velocity": 73
  },
  {
    "note": 84,
    "time": 138720,
    "velocity": 75
  },
  {
    "note": 64,
    "time": 138720,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138749,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 138749,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 138752,
    "velocity": 62
  },
  {
    "note": 71,
    "time": 138752,
    "velocity": 74
  },
  {
    "note": 83,
    "time": 138781,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138784,
    "velocity": 63
  },
  {
    "note": 84,
    "time": 138784,
    "velocity": 63
  },
  {
    "note": 71,
    "time": 138784,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 138813,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 138813,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 138816,
    "velocity": 57
  },
  {
    "note": 69,
    "time": 138816,
    "velocity": 62
  },
  {
    "note": 81,
    "time": 138845,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 138848,
    "velocity": 53
  },
  {
    "note": 77,
    "time": 138848,
    "velocity": 55
  },
  {
    "note": 69,
    "time": 138848,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 138877,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 138877,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 138880,
    "velocity": 59
  },
  {
    "note": 64,
    "time": 138880,
    "velocity": 54
  },
  {
    "note": 76,
    "time": 138909,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 138912,
    "velocity": 64
  },
  {
    "note": 77,
    "time": 138912,
    "velocity": 63
  },
  {
    "note": 64,
    "time": 138912,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 138941,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 138941,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 138944,
    "velocity": 60
  },
  {
    "note": 62,
    "time": 138944,
    "velocity": 61
  },
  {
    "note": 74,
    "time": 138973,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 138976,
    "velocity": 77
  },
  {
    "note": 83,
    "time": 138976,
    "velocity": 76
  },
  {
    "note": 62,
    "time": 138976,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 139005,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 139005,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 139008,
    "velocity": 62
  },
  {
    "note": 69,
    "time": 139008,
    "velocity": 72
  },
  {
    "note": 81,
    "time": 139037,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 139040,
    "velocity": 64
  },
  {
    "note": 83,
    "time": 139040,
    "velocity": 65
  },
  {
    "note": 69,
    "time": 139040,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 139069,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 139069,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 139072,
    "velocity": 51
  },
  {
    "note": 69,
    "time": 139104,
    "velocity": 58
  },
  {
    "note": 81,
    "time": 139104,
    "velocity": 54
  },
  {
    "note": 60,
    "time": 139104,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 139133,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 139133,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 139136,
    "velocity": 58
  },
  {
    "note": 68,
    "time": 139136,
    "velocity": 73
  },
  {
    "note": 80,
    "time": 139165,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 139168,
    "velocity": 66
  },
  {
    "note": 81,
    "time": 139168,
    "velocity": 64
  },
  {
    "note": 68,
    "time": 139168,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 139197,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 139197,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 139200,
    "velocity": 51
  },
  {
    "note": 68,
    "time": 139232,
    "velocity": 55
  },
  {
    "note": 80,
    "time": 139232,
    "velocity": 56
  },
  {
    "note": 59,
    "time": 139232,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 139261,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 139261,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 139264,
    "velocity": 54
  },
  {
    "note": 66,
    "time": 139264,
    "velocity": 74
  },
  {
    "note": 77,
    "time": 139293,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 139296,
    "velocity": 67
  },
  {
    "note": 80,
    "time": 139296,
    "velocity": 67
  },
  {
    "note": 66,
    "time": 139296,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 139325,
    "velocity": 0
  },
  {
    "note": 80,
    "time": 139325,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 139328,
    "velocity": 59
  },
  {
    "note": 60,
    "time": 139360,
    "velocity": 54
  },
  {
    "note": 72,
    "time": 139360,
    "velocity": 57
  },
  {
    "note": 64,
    "time": 139360,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 139389,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 139389,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 139392,
    "velocity": 60
  },
  {
    "note": 59,
    "time": 139392,
    "velocity": 54
  },
  {
    "note": 71,
    "time": 139421,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 139421,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 139424,
    "velocity": 57
  },
  {
    "note": 57,
    "time": 139424,
    "velocity": 57
  },
  {
    "note": 69,
    "time": 139453,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 139453,
    "velocity": 0
  },
  {
    "note": 68,
    "time": 139456,
    "velocity": 61
  },
  {
    "note": 56,
    "time": 139456,
    "velocity": 64
  },
  {
    "note": 68,
    "time": 139485,
    "velocity": 0
  },
  {
    "note": 56,
    "time": 139485,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 139488,
    "velocity": 74
  },
  {
    "note": 74,
    "time": 139488,
    "velocity": 75
  },
  {
    "note": 62,
    "time": 139488,
    "velocity": 71
  },
  {
    "note": 62,
    "time": 139517,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 139517,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 139517,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 139520,
    "velocity": 64
  },
  {
    "note": 60,
    "time": 139520,
    "velocity": 62
  },
  {
    "note": 72,
    "time": 139549,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 139549,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 139552,
    "velocity": 63
  },
  {
    "note": 59,
    "time": 139552,
    "velocity": 62
  },
  {
    "note": 71,
    "time": 139581,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 139581,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 139584,
    "velocity": 66
  },
  {
    "note": 57,
    "time": 139584,
    "velocity": 64
  },
  {
    "note": 69,
    "time": 139613,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 139613,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 139616,
    "velocity": 80
  },
  {
    "note": 76,
    "time": 139616,
    "velocity": 82
  },
  {
    "note": 64,
    "time": 139616,
    "velocity": 83
  },
  {
    "note": 64,
    "time": 139645,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 139645,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 139645,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 139648,
    "velocity": 69
  },
  {
    "note": 62,
    "time": 139648,
    "velocity": 67
  },
  {
    "note": 74,
    "time": 139677,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 139677,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 139680,
    "velocity": 68
  },
  {
    "note": 60,
    "time": 139680,
    "velocity": 70
  },
  {
    "note": 72,
    "time": 139709,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 139709,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 139712,
    "velocity": 73
  },
  {
    "note": 59,
    "time": 139712,
    "velocity": 72
  },
  {
    "note": 71,
    "time": 139741,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 139741,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 139744,
    "velocity": 87
  },
  {
    "note": 77,
    "time": 139744,
    "velocity": 86
  },
  {
    "note": 65,
    "time": 139744,
    "velocity": 85
  },
  {
    "note": 65,
    "time": 139773,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 139773,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 139773,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 139776,
    "velocity": 75
  },
  {
    "note": 64,
    "time": 139776,
    "velocity": 77
  },
  {
    "note": 76,
    "time": 139805,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 139805,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 139808,
    "velocity": 74
  },
  {
    "note": 62,
    "time": 139808,
    "velocity": 71
  },
  {
    "note": 74,
    "time": 139837,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 139837,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 139840,
    "velocity": 75
  },
  {
    "note": 60,
    "time": 139840,
    "velocity": 74
  },
  {
    "note": 72,
    "time": 139869,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 139869,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 139872,
    "velocity": 93
  },
  {
    "note": 79,
    "time": 139872,
    "velocity": 95
  },
  {
    "note": 67,
    "time": 139872,
    "velocity": 94
  },
  {
    "note": 67,
    "time": 139901,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 139901,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 139901,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 139904,
    "velocity": 79
  },
  {
    "note": 65,
    "time": 139904,
    "velocity": 77
  },
  {
    "note": 77,
    "time": 139933,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 139933,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 139936,
    "velocity": 79
  },
  {
    "note": 64,
    "time": 139936,
    "velocity": 78
  },
  {
    "note": 76,
    "time": 139965,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 139965,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 139968,
    "velocity": 83
  },
  {
    "note": 62,
    "time": 139968,
    "velocity": 80
  },
  {
    "note": 74,
    "time": 139997,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 139997,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 140000,
    "velocity": 101
  },
  {
    "note": 81,
    "time": 140000,
    "velocity": 101
  },
  {
    "note": 69,
    "time": 140000,
    "velocity": 98
  },
  {
    "note": 69,
    "time": 140029,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 140029,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 140029,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 140032,
    "velocity": 84
  },
  {
    "note": 67,
    "time": 140032,
    "velocity": 85
  },
  {
    "note": 79,
    "time": 140061,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 140061,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 140064,
    "velocity": 85
  },
  {
    "note": 65,
    "time": 140064,
    "velocity": 85
  },
  {
    "note": 77,
    "time": 140093,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 140093,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 140096,
    "velocity": 110
  },
  {
    "note": 64,
    "time": 140096,
    "velocity": 107
  },
  {
    "note": 76,
    "time": 140125,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 140125,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 140128,
    "velocity": 100
  },
  {
    "note": 55,
    "time": 140128,
    "velocity": 71
  },
  {
    "note": 79,
    "time": 140157,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 140157,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 140160,
    "velocity": 98
  },
  {
    "note": 57,
    "time": 140160,
    "velocity": 96
  },
  {
    "note": 81,
    "time": 140189,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 140189,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 140192,
    "velocity": 101
  },
  {
    "note": 59,
    "time": 140192,
    "velocity": 99
  },
  {
    "note": 83,
    "time": 140221,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 140221,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 140224,
    "velocity": 100
  },
  {
    "note": 84,
    "time": 140224,
    "velocity": 100
  },
  {
    "note": 60,
    "time": 140224,
    "velocity": 118
  },
  {
    "note": 67,
    "time": 140352,
    "velocity": 99
  },
  {
    "note": 72,
    "time": 140352,
    "velocity": 99
  },
  {
    "note": 76,
    "time": 140352,
    "velocity": 97
  },
  {
    "note": 79,
    "time": 140352,
    "velocity": 100
  },
  {
    "note": 40,
    "time": 140352,
    "velocity": 100
  },
  {
    "note": 43,
    "time": 140352,
    "velocity": 99
  },
  {
    "note": 48,
    "time": 140352,
    "velocity": 98
  },
  {
    "note": 52,
    "time": 140352,
    "velocity": 101
  },
  {
    "note": 72,
    "time": 140455,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 140455,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 140455,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 140468,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 140480,
    "velocity": 122
  },
  {
    "note": 76,
    "time": 140480,
    "velocity": 121
  },
  {
    "note": 81,
    "time": 140480,
    "velocity": 119
  },
  {
    "note": 85,
    "time": 140480,
    "velocity": 121
  },
  {
    "note": 43,
    "time": 140480,
    "velocity": 105
  },
  {
    "note": 49,
    "time": 140480,
    "velocity": 105
  },
  {
    "note": 52,
    "time": 140480,
    "velocity": 106
  },
  {
    "note": 55,
    "time": 140480,
    "velocity": 103
  },
  {
    "note": 57,
    "time": 140480,
    "velocity": 105
  },
  {
    "note": 73,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 140596,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 140608,
    "velocity": 70
  },
  {
    "note": 52,
    "time": 140608,
    "velocity": 104
  },
  {
    "note": 61,
    "time": 140608,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 140637,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 140637,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 140637,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 140640,
    "velocity": 103
  },
  {
    "note": 57,
    "time": 140640,
    "velocity": 107
  },
  {
    "note": 64,
    "time": 140640,
    "velocity": 104
  },
  {
    "note": 73,
    "time": 140669,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 140669,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 140669,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 140672,
    "velocity": 106
  },
  {
    "note": 76,
    "time": 140672,
    "velocity": 105
  },
  {
    "note": 69,
    "time": 140701,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 140701,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 140704,
    "velocity": 109
  },
  {
    "note": 81,
    "time": 140704,
    "velocity": 111
  },
  {
    "note": 73,
    "time": 140733,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 140733,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 140736,
    "velocity": 100
  },
  {
    "note": 76,
    "time": 140736,
    "velocity": 100
  },
  {
    "note": 85,
    "time": 140736,
    "velocity": 100
  },
  {
    "note": 69,
    "time": 140852,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 140852,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 140852,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 140864,
    "velocity": 125
  },
  {
    "note": 76,
    "time": 140864,
    "velocity": 127
  },
  {
    "note": 81,
    "time": 140864,
    "velocity": 126
  },
  {
    "note": 85,
    "time": 140864,
    "velocity": 126
  },
  {
    "note": 43,
    "time": 140864,
    "velocity": 97
  },
  {
    "note": 49,
    "time": 140864,
    "velocity": 101
  },
  {
    "note": 52,
    "time": 140864,
    "velocity": 98
  },
  {
    "note": 55,
    "time": 140864,
    "velocity": 99
  },
  {
    "note": 57,
    "time": 140864,
    "velocity": 97
  },
  {
    "note": 73,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 85,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 140980,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 140992,
    "velocity": 121
  },
  {
    "note": 77,
    "time": 140992,
    "velocity": 123
  },
  {
    "note": 81,
    "time": 140992,
    "velocity": 121
  },
  {
    "note": 86,
    "time": 140992,
    "velocity": 123
  },
  {
    "note": 41,
    "time": 140992,
    "velocity": 102
  },
  {
    "note": 45,
    "time": 140992,
    "velocity": 100
  },
  {
    "note": 50,
    "time": 140992,
    "velocity": 101
  },
  {
    "note": 53,
    "time": 140992,
    "velocity": 100
  },
  {
    "note": 74,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 141108,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 141120,
    "velocity": 69
  },
  {
    "note": 53,
    "time": 141120,
    "velocity": 115
  },
  {
    "note": 62,
    "time": 141120,
    "velocity": 113
  },
  {
    "note": 69,
    "time": 141149,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 141149,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 141149,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 141152,
    "velocity": 106
  },
  {
    "note": 57,
    "time": 141152,
    "velocity": 109
  },
  {
    "note": 65,
    "time": 141152,
    "velocity": 108
  },
  {
    "note": 74,
    "time": 141181,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 141181,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 141181,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 141184,
    "velocity": 104
  },
  {
    "note": 77,
    "time": 141184,
    "velocity": 103
  },
  {
    "note": 69,
    "time": 141213,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 141213,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 141216,
    "velocity": 109
  },
  {
    "note": 81,
    "time": 141216,
    "velocity": 107
  },
  {
    "note": 74,
    "time": 141245,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 141245,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 141248,
    "velocity": 106
  },
  {
    "note": 77,
    "time": 141248,
    "velocity": 104
  },
  {
    "note": 86,
    "time": 141248,
    "velocity": 104
  },
  {
    "note": 69,
    "time": 141364,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 141364,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 141364,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 141376,
    "velocity": 126
  },
  {
    "note": 77,
    "time": 141376,
    "velocity": 126
  },
  {
    "note": 81,
    "time": 141376,
    "velocity": 127
  },
  {
    "note": 86,
    "time": 141376,
    "velocity": 127
  },
  {
    "note": 41,
    "time": 141376,
    "velocity": 99
  },
  {
    "note": 45,
    "time": 141376,
    "velocity": 98
  },
  {
    "note": 50,
    "time": 141376,
    "velocity": 100
  },
  {
    "note": 53,
    "time": 141376,
    "velocity": 99
  },
  {
    "note": 74,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 86,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 141492,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 141504,
    "velocity": 109
  },
  {
    "note": 74,
    "time": 141504,
    "velocity": 108
  },
  {
    "note": 79,
    "time": 141504,
    "velocity": 106
  },
  {
    "note": 83,
    "time": 141504,
    "velocity": 109
  },
  {
    "note": 41,
    "time": 141504,
    "velocity": 120
  },
  {
    "note": 47,
    "time": 141504,
    "velocity": 118
  },
  {
    "note": 50,
    "time": 141504,
    "velocity": 118
  },
  {
    "note": 53,
    "time": 141504,
    "velocity": 118
  },
  {
    "note": 55,
    "time": 141504,
    "velocity": 118
  },
  {
    "note": 71,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 141620,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 141632,
    "velocity": 68
  },
  {
    "note": 50,
    "time": 141632,
    "velocity": 108
  },
  {
    "note": 59,
    "time": 141632,
    "velocity": 107
  },
  {
    "note": 67,
    "time": 141661,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 141661,
    "velocity": 0
  },
  {
    "note": 59,
    "time": 141661,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 141664,
    "velocity": 102
  },
  {
    "note": 55,
    "time": 141664,
    "velocity": 104
  },
  {
    "note": 62,
    "time": 141664,
    "velocity": 105
  },
  {
    "note": 71,
    "time": 141693,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 141693,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 141693,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 141696,
    "velocity": 105
  },
  {
    "note": 74,
    "time": 141696,
    "velocity": 106
  },
  {
    "note": 67,
    "time": 141725,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 141725,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 141728,
    "velocity": 111
  },
  {
    "note": 79,
    "time": 141728,
    "velocity": 111
  },
  {
    "note": 71,
    "time": 141757,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 141757,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 141760,
    "velocity": 102
  },
  {
    "note": 74,
    "time": 141760,
    "velocity": 102
  },
  {
    "note": 83,
    "time": 141760,
    "velocity": 115
  },
  {
    "note": 67,
    "time": 141876,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 141876,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 141876,
    "velocity": 0
  },
  {
    "note": 71,
    "time": 141888,
    "velocity": 127
  },
  {
    "note": 74,
    "time": 141888,
    "velocity": 127
  },
  {
    "note": 79,
    "time": 141888,
    "velocity": 127
  },
  {
    "note": 83,
    "time": 141888,
    "velocity": 127
  },
  {
    "note": 41,
    "time": 141888,
    "velocity": 98
  },
  {
    "note": 47,
    "time": 141888,
    "velocity": 98
  },
  {
    "note": 50,
    "time": 141888,
    "velocity": 97
  },
  {
    "note": 53,
    "time": 141888,
    "velocity": 100
  },
  {
    "note": 55,
    "time": 141888,
    "velocity": 98
  },
  {
    "note": 71,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 83,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 47,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 142004,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 142016,
    "velocity": 124
  },
  {
    "note": 76,
    "time": 142016,
    "velocity": 122
  },
  {
    "note": 79,
    "time": 142016,
    "velocity": 124
  },
  {
    "note": 84,
    "time": 142016,
    "velocity": 120
  },
  {
    "note": 40,
    "time": 142016,
    "velocity": 100
  },
  {
    "note": 43,
    "time": 142016,
    "velocity": 102
  },
  {
    "note": 48,
    "time": 142016,
    "velocity": 101
  },
  {
    "note": 52,
    "time": 142016,
    "velocity": 104
  },
  {
    "note": 72,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 142132,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 142144,
    "velocity": 71
  },
  {
    "note": 52,
    "time": 142144,
    "velocity": 111
  },
  {
    "note": 60,
    "time": 142144,
    "velocity": 114
  },
  {
    "note": 67,
    "time": 142173,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 142173,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 142173,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 142176,
    "velocity": 106
  },
  {
    "note": 55,
    "time": 142176,
    "velocity": 109
  },
  {
    "note": 64,
    "time": 142176,
    "velocity": 111
  },
  {
    "note": 72,
    "time": 142205,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 142205,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 142205,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 142208,
    "velocity": 107
  },
  {
    "note": 76,
    "time": 142208,
    "velocity": 106
  },
  {
    "note": 67,
    "time": 142237,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 142237,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 142240,
    "velocity": 104
  },
  {
    "note": 79,
    "time": 142240,
    "velocity": 107
  },
  {
    "note": 72,
    "time": 142269,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 142269,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 142272,
    "velocity": 106
  },
  {
    "note": 76,
    "time": 142272,
    "velocity": 104
  },
  {
    "note": 84,
    "time": 142272,
    "velocity": 116
  },
  {
    "note": 67,
    "time": 142388,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 142388,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 142388,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 142400,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 142400,
    "velocity": 127
  },
  {
    "note": 79,
    "time": 142400,
    "velocity": 127
  },
  {
    "note": 84,
    "time": 142400,
    "velocity": 127
  },
  {
    "note": 40,
    "time": 142400,
    "velocity": 100
  },
  {
    "note": 43,
    "time": 142400,
    "velocity": 97
  },
  {
    "note": 48,
    "time": 142400,
    "velocity": 99
  },
  {
    "note": 52,
    "time": 142400,
    "velocity": 100
  },
  {
    "note": 72,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 84,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 142516,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 142528,
    "velocity": 107
  },
  {
    "note": 72,
    "time": 142528,
    "velocity": 106
  },
  {
    "note": 77,
    "time": 142528,
    "velocity": 107
  },
  {
    "note": 81,
    "time": 142528,
    "velocity": 105
  },
  {
    "note": 40,
    "time": 142528,
    "velocity": 118
  },
  {
    "note": 45,
    "time": 142528,
    "velocity": 115
  },
  {
    "note": 48,
    "time": 142528,
    "velocity": 116
  },
  {
    "note": 52,
    "time": 142528,
    "velocity": 118
  },
  {
    "note": 53,
    "time": 142528,
    "velocity": 118
  },
  {
    "note": 69,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 142644,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 142656,
    "velocity": 68
  },
  {
    "note": 48,
    "time": 142656,
    "velocity": 107
  },
  {
    "note": 57,
    "time": 142656,
    "velocity": 107
  },
  {
    "note": 65,
    "time": 142685,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 142685,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 142685,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 142688,
    "velocity": 101
  },
  {
    "note": 53,
    "time": 142688,
    "velocity": 105
  },
  {
    "note": 60,
    "time": 142688,
    "velocity": 107
  },
  {
    "note": 69,
    "time": 142717,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 142717,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 142717,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 142720,
    "velocity": 103
  },
  {
    "note": 72,
    "time": 142720,
    "velocity": 104
  },
  {
    "note": 65,
    "time": 142749,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 142749,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 142752,
    "velocity": 109
  },
  {
    "note": 77,
    "time": 142752,
    "velocity": 111
  },
  {
    "note": 69,
    "time": 142781,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 142781,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 142784,
    "velocity": 102
  },
  {
    "note": 72,
    "time": 142784,
    "velocity": 102
  },
  {
    "note": 81,
    "time": 142784,
    "velocity": 115
  },
  {
    "note": 65,
    "time": 142900,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 142900,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 142900,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 142912,
    "velocity": 125
  },
  {
    "note": 72,
    "time": 142912,
    "velocity": 127
  },
  {
    "note": 77,
    "time": 142912,
    "velocity": 127
  },
  {
    "note": 81,
    "time": 142912,
    "velocity": 127
  },
  {
    "note": 40,
    "time": 142912,
    "velocity": 98
  },
  {
    "note": 45,
    "time": 142912,
    "velocity": 100
  },
  {
    "note": 48,
    "time": 142912,
    "velocity": 99
  },
  {
    "note": 52,
    "time": 142912,
    "velocity": 100
  },
  {
    "note": 53,
    "time": 142912,
    "velocity": 99
  },
  {
    "note": 69,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 143028,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143040,
    "velocity": 121
  },
  {
    "note": 74,
    "time": 143040,
    "velocity": 124
  },
  {
    "note": 77,
    "time": 143040,
    "velocity": 124
  },
  {
    "note": 82,
    "time": 143040,
    "velocity": 121
  },
  {
    "note": 38,
    "time": 143040,
    "velocity": 100
  },
  {
    "note": 41,
    "time": 143040,
    "velocity": 100
  },
  {
    "note": 46,
    "time": 143040,
    "velocity": 101
  },
  {
    "note": 50,
    "time": 143040,
    "velocity": 102
  },
  {
    "note": 70,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 143156,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 143168,
    "velocity": 72
  },
  {
    "note": 50,
    "time": 143168,
    "velocity": 113
  },
  {
    "note": 58,
    "time": 143168,
    "velocity": 112
  },
  {
    "note": 65,
    "time": 143197,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 143197,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 143197,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143200,
    "velocity": 105
  },
  {
    "note": 53,
    "time": 143200,
    "velocity": 110
  },
  {
    "note": 62,
    "time": 143200,
    "velocity": 109
  },
  {
    "note": 70,
    "time": 143229,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 143229,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 143229,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 143232,
    "velocity": 107
  },
  {
    "note": 74,
    "time": 143232,
    "velocity": 109
  },
  {
    "note": 65,
    "time": 143261,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 143261,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143264,
    "velocity": 106
  },
  {
    "note": 77,
    "time": 143264,
    "velocity": 105
  },
  {
    "note": 70,
    "time": 143293,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 143293,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 143296,
    "velocity": 104
  },
  {
    "note": 74,
    "time": 143296,
    "velocity": 106
  },
  {
    "note": 82,
    "time": 143296,
    "velocity": 114
  },
  {
    "note": 65,
    "time": 143412,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 143412,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 143412,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143424,
    "velocity": 127
  },
  {
    "note": 74,
    "time": 143424,
    "velocity": 126
  },
  {
    "note": 77,
    "time": 143424,
    "velocity": 127
  },
  {
    "note": 82,
    "time": 143424,
    "velocity": 125
  },
  {
    "note": 38,
    "time": 143424,
    "velocity": 101
  },
  {
    "note": 41,
    "time": 143424,
    "velocity": 99
  },
  {
    "note": 46,
    "time": 143424,
    "velocity": 98
  },
  {
    "note": 50,
    "time": 143424,
    "velocity": 98
  },
  {
    "note": 70,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 143540,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143552,
    "velocity": 118
  },
  {
    "note": 76,
    "time": 143552,
    "velocity": 115
  },
  {
    "note": 79,
    "time": 143552,
    "velocity": 117
  },
  {
    "note": 82,
    "time": 143552,
    "velocity": 116
  },
  {
    "note": 37,
    "time": 143552,
    "velocity": 120
  },
  {
    "note": 43,
    "time": 143552,
    "velocity": 119
  },
  {
    "note": 46,
    "time": 143552,
    "velocity": 118
  },
  {
    "note": 52,
    "time": 143552,
    "velocity": 118
  },
  {
    "note": 70,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 143668,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 143680,
    "velocity": 67
  },
  {
    "note": 52,
    "time": 143680,
    "velocity": 111
  },
  {
    "note": 58,
    "time": 143680,
    "velocity": 111
  },
  {
    "note": 67,
    "time": 143709,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 143709,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 143709,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143712,
    "velocity": 97
  },
  {
    "note": 55,
    "time": 143712,
    "velocity": 112
  },
  {
    "note": 64,
    "time": 143712,
    "velocity": 111
  },
  {
    "note": 70,
    "time": 143741,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 143741,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 143741,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 143744,
    "velocity": 110
  },
  {
    "note": 76,
    "time": 143744,
    "velocity": 111
  },
  {
    "note": 67,
    "time": 143773,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 143773,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143776,
    "velocity": 108
  },
  {
    "note": 79,
    "time": 143776,
    "velocity": 107
  },
  {
    "note": 70,
    "time": 143805,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 143805,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 143808,
    "velocity": 106
  },
  {
    "note": 76,
    "time": 143808,
    "velocity": 108
  },
  {
    "note": 82,
    "time": 143808,
    "velocity": 101
  },
  {
    "note": 67,
    "time": 143924,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 143924,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 143924,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 143936,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 143936,
    "velocity": 127
  },
  {
    "note": 79,
    "time": 143936,
    "velocity": 127
  },
  {
    "note": 82,
    "time": 143936,
    "velocity": 127
  },
  {
    "note": 37,
    "time": 143936,
    "velocity": 98
  },
  {
    "note": 43,
    "time": 143936,
    "velocity": 100
  },
  {
    "note": 46,
    "time": 143936,
    "velocity": 101
  },
  {
    "note": 52,
    "time": 143936,
    "velocity": 98
  },
  {
    "note": 70,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 82,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 144052,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 144064,
    "velocity": 110
  },
  {
    "note": 74,
    "time": 144064,
    "velocity": 111
  },
  {
    "note": 78,
    "time": 144064,
    "velocity": 111
  },
  {
    "note": 81,
    "time": 144064,
    "velocity": 110
  },
  {
    "note": 36,
    "time": 144064,
    "velocity": 106
  },
  {
    "note": 42,
    "time": 144064,
    "velocity": 105
  },
  {
    "note": 45,
    "time": 144064,
    "velocity": 103
  },
  {
    "note": 50,
    "time": 144064,
    "velocity": 106
  },
  {
    "note": 69,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 42,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 144180,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 144192,
    "velocity": 69
  },
  {
    "note": 50,
    "time": 144192,
    "velocity": 113
  },
  {
    "note": 57,
    "time": 144192,
    "velocity": 112
  },
  {
    "note": 66,
    "time": 144221,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 144221,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 144221,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 144224,
    "velocity": 99
  },
  {
    "note": 54,
    "time": 144224,
    "velocity": 112
  },
  {
    "note": 62,
    "time": 144224,
    "velocity": 111
  },
  {
    "note": 69,
    "time": 144253,
    "velocity": 0
  },
  {
    "note": 54,
    "time": 144253,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 144253,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 144256,
    "velocity": 107
  },
  {
    "note": 74,
    "time": 144256,
    "velocity": 109
  },
  {
    "note": 66,
    "time": 144285,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 144285,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 144288,
    "velocity": 106
  },
  {
    "note": 78,
    "time": 144288,
    "velocity": 108
  },
  {
    "note": 69,
    "time": 144317,
    "velocity": 0
  },
  {
    "note": 78,
    "time": 144317,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 144320,
    "velocity": 119
  },
  {
    "note": 74,
    "time": 144320,
    "velocity": 116
  },
  {
    "note": 81,
    "time": 144320,
    "velocity": 112
  },
  {
    "note": 66,
    "time": 144436,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 144436,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 144448,
    "velocity": 107
  },
  {
    "note": 57,
    "time": 144448,
    "velocity": 114
  },
  {
    "note": 62,
    "time": 144448,
    "velocity": 113
  },
  {
    "note": 66,
    "time": 144448,
    "velocity": 112
  },
  {
    "note": 36,
    "time": 144448,
    "velocity": 114
  },
  {
    "note": 42,
    "time": 144448,
    "velocity": 114
  },
  {
    "note": 45,
    "time": 144448,
    "velocity": 111
  },
  {
    "note": 48,
    "time": 144448,
    "velocity": 114
  },
  {
    "note": 50,
    "time": 144448,
    "velocity": 114
  },
  {
    "note": 81,
    "time": 144551,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 66,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 36,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 42,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 144564,
    "velocity": 0
  },
  {
    "note": 81,
    "time": 144576,
    "velocity": 45
  },
  {
    "note": 69,
    "time": 144576,
    "velocity": 47
  },
  {
    "note": 70,
    "time": 144576,
    "velocity": 48
  },
  {
    "note": 74,
    "time": 144576,
    "velocity": 44
  },
  {
    "note": 57,
    "time": 144576,
    "velocity": 112
  },
  {
    "note": 58,
    "time": 144576,
    "velocity": 112
  },
  {
    "note": 62,
    "time": 144576,
    "velocity": 115
  },
  {
    "note": 43,
    "time": 144576,
    "velocity": 46
  },
  {
    "note": 50,
    "time": 144576,
    "velocity": 46
  },
  {
    "note": 55,
    "time": 144576,
    "velocity": 46
  },
  {
    "note": 57,
    "time": 144576,
    "velocity": 47
  },
  {
    "note": 31,
    "time": 144576,
    "velocity": 109
  },
  {
    "note": 38,
    "time": 144576,
    "velocity": 110
  },
  {
    "note": 43,
    "time": 144576,
    "velocity": 109
  },
  {
    "note": 45,
    "time": 144576,
    "velocity": 108
  },
  {
    "note": 81,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 144807,
    "velocity": 0
  },
  {
    "note": 79,
    "time": 144832,
    "velocity": 44
  },
  {
    "note": 67,
    "time": 144832,
    "velocity": 46
  },
  {
    "note": 70,
    "time": 144832,
    "velocity": 46
  },
  {
    "note": 74,
    "time": 144832,
    "velocity": 45
  },
  {
    "note": 67,
    "time": 144832,
    "velocity": 117
  },
  {
    "note": 55,
    "time": 144832,
    "velocity": 122
  },
  {
    "note": 58,
    "time": 144832,
    "velocity": 122
  },
  {
    "note": 62,
    "time": 144832,
    "velocity": 125
  },
  {
    "note": 46,
    "time": 144832,
    "velocity": 48
  },
  {
    "note": 50,
    "time": 144832,
    "velocity": 49
  },
  {
    "note": 55,
    "time": 144832,
    "velocity": 50
  },
  {
    "note": 58,
    "time": 144832,
    "velocity": 49
  },
  {
    "note": 34,
    "time": 144832,
    "velocity": 125
  },
  {
    "note": 38,
    "time": 144832,
    "velocity": 127
  },
  {
    "note": 43,
    "time": 144832,
    "velocity": 127
  },
  {
    "note": 46,
    "time": 144832,
    "velocity": 127
  },
  {
    "note": 67,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 145063,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 145088,
    "velocity": 44
  },
  {
    "note": 70,
    "time": 145088,
    "velocity": 45
  },
  {
    "note": 73,
    "time": 145088,
    "velocity": 45
  },
  {
    "note": 55,
    "time": 145088,
    "velocity": 121
  },
  {
    "note": 58,
    "time": 145088,
    "velocity": 119
  },
  {
    "note": 61,
    "time": 145088,
    "velocity": 118
  },
  {
    "note": 40,
    "time": 145088,
    "velocity": 40
  },
  {
    "note": 46,
    "time": 145088,
    "velocity": 40
  },
  {
    "note": 49,
    "time": 145088,
    "velocity": 39
  },
  {
    "note": 52,
    "time": 145088,
    "velocity": 39
  },
  {
    "note": 28,
    "time": 145088,
    "velocity": 107
  },
  {
    "note": 34,
    "time": 145088,
    "velocity": 105
  },
  {
    "note": 37,
    "time": 145088,
    "velocity": 105
  },
  {
    "note": 40,
    "time": 145088,
    "velocity": 107
  },
  {
    "note": 79,
    "time": 145294,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 145294,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 73,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 61,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 49,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 28,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 37,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 145319,
    "velocity": 0
  },
  {
    "note": 77,
    "time": 145344,
    "velocity": 42
  },
  {
    "note": 65,
    "time": 145344,
    "velocity": 51
  },
  {
    "note": 69,
    "time": 145344,
    "velocity": 51
  },
  {
    "note": 74,
    "time": 145344,
    "velocity": 49
  },
  {
    "note": 65,
    "time": 145344,
    "velocity": 118
  },
  {
    "note": 53,
    "time": 145344,
    "velocity": 126
  },
  {
    "note": 57,
    "time": 145344,
    "velocity": 127
  },
  {
    "note": 62,
    "time": 145344,
    "velocity": 126
  },
  {
    "note": 41,
    "time": 145344,
    "velocity": 49
  },
  {
    "note": 45,
    "time": 145344,
    "velocity": 47
  },
  {
    "note": 50,
    "time": 145344,
    "velocity": 48
  },
  {
    "note": 53,
    "time": 145344,
    "velocity": 51
  },
  {
    "note": 29,
    "time": 145344,
    "velocity": 126
  },
  {
    "note": 33,
    "time": 145344,
    "velocity": 127
  },
  {
    "note": 38,
    "time": 145344,
    "velocity": 126
  },
  {
    "note": 41,
    "time": 145344,
    "velocity": 127
  },
  {
    "note": 77,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 145575,
    "velocity": 0
  },
  {
    "note": 76,
    "time": 145600,
    "velocity": 50
  },
  {
    "note": 62,
    "time": 145600,
    "velocity": 52
  },
  {
    "note": 64,
    "time": 145600,
    "velocity": 50
  },
  {
    "note": 69,
    "time": 145600,
    "velocity": 51
  },
  {
    "note": 74,
    "time": 145600,
    "velocity": 50
  },
  {
    "note": 64,
    "time": 145600,
    "velocity": 121
  },
  {
    "note": 50,
    "time": 145600,
    "velocity": 127
  },
  {
    "note": 52,
    "time": 145600,
    "velocity": 127
  },
  {
    "note": 57,
    "time": 145600,
    "velocity": 127
  },
  {
    "note": 62,
    "time": 145600,
    "velocity": 127
  },
  {
    "note": 57,
    "time": 145600,
    "velocity": 56
  },
  {
    "note": 45,
    "time": 145600,
    "velocity": 45
  },
  {
    "note": 52,
    "time": 145600,
    "velocity": 46
  },
  {
    "note": 45,
    "time": 145600,
    "velocity": 127
  },
  {
    "note": 33,
    "time": 145600,
    "velocity": 92
  },
  {
    "note": 40,
    "time": 145600,
    "velocity": 94
  },
  {
    "note": 62,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 145831,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 145856,
    "velocity": 47
  },
  {
    "note": 69,
    "time": 145856,
    "velocity": 47
  },
  {
    "note": 72,
    "time": 145856,
    "velocity": 45
  },
  {
    "note": 52,
    "time": 145856,
    "velocity": 117
  },
  {
    "note": 57,
    "time": 145856,
    "velocity": 118
  },
  {
    "note": 60,
    "time": 145856,
    "velocity": 118
  },
  {
    "note": 52,
    "time": 145856,
    "velocity": 53
  },
  {
    "note": 57,
    "time": 145856,
    "velocity": 51
  },
  {
    "note": 60,
    "time": 145856,
    "velocity": 51
  },
  {
    "note": 40,
    "time": 145856,
    "velocity": 126
  },
  {
    "note": 45,
    "time": 145856,
    "velocity": 127
  },
  {
    "note": 48,
    "time": 145856,
    "velocity": 127
  },
  {
    "note": 76,
    "time": 146062,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 146062,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 146062,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 146062,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 146062,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 146062,
    "velocity": 0
  },
  {
    "note": 64,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 52,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 40,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 146087,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 146112,
    "velocity": 42
  },
  {
    "note": 62,
    "time": 146112,
    "velocity": 47
  },
  {
    "note": 69,
    "time": 146112,
    "velocity": 46
  },
  {
    "note": 72,
    "time": 146112,
    "velocity": 47
  },
  {
    "note": 62,
    "time": 146112,
    "velocity": 118
  },
  {
    "note": 50,
    "time": 146112,
    "velocity": 124
  },
  {
    "note": 57,
    "time": 146112,
    "velocity": 125
  },
  {
    "note": 60,
    "time": 146112,
    "velocity": 125
  },
  {
    "note": 60,
    "time": 146112,
    "velocity": 46
  },
  {
    "note": 46,
    "time": 146112,
    "velocity": 49
  },
  {
    "note": 50,
    "time": 146112,
    "velocity": 48
  },
  {
    "note": 53,
    "time": 146112,
    "velocity": 47
  },
  {
    "note": 48,
    "time": 146112,
    "velocity": 127
  },
  {
    "note": 34,
    "time": 146112,
    "velocity": 127
  },
  {
    "note": 38,
    "time": 146112,
    "velocity": 127
  },
  {
    "note": 41,
    "time": 146112,
    "velocity": 127
  },
  {
    "note": 62,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 72,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 60,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 48,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 146343,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 146368,
    "velocity": 45
  },
  {
    "note": 67,
    "time": 146368,
    "velocity": 46
  },
  {
    "note": 70,
    "time": 146368,
    "velocity": 46
  },
  {
    "note": 50,
    "time": 146368,
    "velocity": 116
  },
  {
    "note": 55,
    "time": 146368,
    "velocity": 117
  },
  {
    "note": 58,
    "time": 146368,
    "velocity": 119
  },
  {
    "note": 58,
    "time": 146368,
    "velocity": 47
  },
  {
    "note": 43,
    "time": 146368,
    "velocity": 44
  },
  {
    "note": 46,
    "time": 146368,
    "velocity": 41
  },
  {
    "note": 50,
    "time": 146368,
    "velocity": 42
  },
  {
    "note": 46,
    "time": 146368,
    "velocity": 118
  },
  {
    "note": 31,
    "time": 146368,
    "velocity": 115
  },
  {
    "note": 34,
    "time": 146368,
    "velocity": 116
  },
  {
    "note": 38,
    "time": 146368,
    "velocity": 113
  },
  {
    "note": 74,
    "time": 146574,
    "velocity": 0
  },
  {
    "note": 67,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 70,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 55,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 58,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 43,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 46,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 31,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 34,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 146599,
    "velocity": 0
  },
  {
    "note": 74,
    "time": 146624,
    "velocity": 49
  },
  {
    "note": 57,
    "time": 146624,
    "velocity": 47
  },
  {
    "note": 65,
    "time": 146624,
    "velocity": 48
  },
  {
    "note": 69,
    "time": 146624,
    "velocity": 48
  },
  {
    "note": 45,
    "time": 146624,
    "velocity": 123
  },
  {
    "note": 53,
    "time": 146624,
    "velocity": 123
  },
  {
    "note": 57,
    "time": 146624,
    "velocity": 120
  },
  {
    "note": 50,
    "time": 146624,
    "velocity": 42
  },
  {
    "note": 38,
    "time": 146624,
    "velocity": 42
  },
  {
    "note": 41,
    "time": 146624,
    "velocity": 41
  },
  {
    "note": 45,
    "time": 146624,
    "velocity": 43
  },
  {
    "note": 38,
    "time": 146624,
    "velocity": 104
  },
  {
    "note": 26,
    "time": 146624,
    "velocity": 111
  },
  {
    "note": 29,
    "time": 146624,
    "velocity": 111
  },
  {
    "note": 33,
    "time": 146624,
    "velocity": 109
  },
  {
    "note": 74,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 65,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 69,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 62,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 53,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 57,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 50,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 41,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 45,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 38,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 26,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 29,
    "time": 147598,
    "velocity": 0
  },
  {
    "note": 33,
    "time": 147598,
    "velocity": 0
  }
]