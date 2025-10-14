var animations = [
  {
    action: function () {
      var confettiDrop = [
        [
          {
            id: "#i01",
            duration: 250,
            delayBefore: 0,
            delayAfter: 0,
            animations: { opacity: 1, scale: [1.25, 1.25] },
          },
          {
            id: "#i01",
            duration: 5050,
            delayBefore: 0,
            delayAfter: 0,
            animations: { scale: [1, 1.25] },
          },
        ],
      ];
      var confettiAnim = new WAnimation(confettiDrop, {
        loop: false,
        clearAfterEnd: true,
      });
      confettiAnim.startAnimation();
    },
  },
  [
    {
      id: "#i01-1",
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i02",
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i03",
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i04",
      duration: 650,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i05",
      duration: 650,
      delayBefore: 950,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
  {
    action: function () {
      var confettiDrop = [
        [
          {
            id: "#i06",
            duration: 250,
            delayBefore: 0,
            delayAfter: 0,
            animations: { opacity: 1, scale: [1.25, 1.25] },
          },
          {
            id: "#i06",
            duration: 5050,
            delayBefore: 0,
            delayAfter: 0,
            animations: { scale: [1, 1.25] },
          },
        ],
      ];
      var confettiAnim = new WAnimation(confettiDrop, {
        loop: false,
        clearAfterEnd: true,
      });
      confettiAnim.startAnimation();
    },
  },
  [
    {
      id: "#i07",
      duration: 650,
      delayBefore: 350,
      delayAfter: 3500,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
  {
    action: function () {
      var confettiDrop = [
        [
          {
            id: "#i08",
            duration: 250,
            delayBefore: 0,
            delayAfter: 0,
            animations: { opacity: 1, scale: [1.25, 1.25] },
          },
          {
            id: "#i08",
            duration: 5050,
            delayBefore: 0,
            delayAfter: 0,
            animations: { scale: [1, 1.25] },
          },
        ],
      ];
      var confettiAnim = new WAnimation(confettiDrop, {
        loop: false,
        clearAfterEnd: true,
      });
      confettiAnim.startAnimation();
    },
  },
  [
    {
      id: "#i09",
      duration: 650,
      delayBefore: 350,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
  [
    {
      id: "#i10",
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i11",
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i12",
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i13",
      duration: 650,
      delayBefore: 550,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
];
new WAnimation(animations, {
  loop: true,
  clearAfterEnd: true,
}).startAnimation();
