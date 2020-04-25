const getCellByPosition = require('../components/tools/getCellByPosition');

describe("getCellByPosition", () => {
  const canvas = [
    {
      top: 0,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 0,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 16,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 32,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 48,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 64,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 80,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 96,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 112,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 128,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 144,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 160,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 176,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 192,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 208,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 224,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 240,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 256,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 272,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 288,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 304,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 320,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 336,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 352,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 368,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 384,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 400,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 416,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 432,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 448,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 464,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 480,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 0,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 16,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 32,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 48,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 64,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 80,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 96,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 112,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 128,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 144,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 160,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 176,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 192,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 208,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 224,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 240,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 256,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 272,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 288,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 304,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 320,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 336,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 352,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 368,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 384,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 400,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 416,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 432,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 448,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 464,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 480,
      curcolor: 'rgb(112, 112, 112)'
    },
    {
      top: 496,
      left: 496,
      curcolor: 'rgb(112, 112, 112)'
    }
  ];
  const pixelOne = {
    top: 16,
    left: 32,
    curcolor: 'rgb(112, 112, 112)'
  };
  const pixelTwo = {
    top: 128,
    left: 128,
    curcolor: 'rgb(112, 112, 112)'
  };
  it("find pixel - second column third row", () => {
    const currPixelOne = getCellByPosition(24, 41, 16, 32, 16, canvas);
    expect(currPixelOne[0]).toEqual(pixelOne);
  });
  it("find pixel - ninth column ninth row", () => {
    const currPixelTwo = getCellByPosition(134, 133, 16, 32, 16, canvas);
    expect(currPixelTwo[0]).toEqual(pixelTwo);
  });
});
