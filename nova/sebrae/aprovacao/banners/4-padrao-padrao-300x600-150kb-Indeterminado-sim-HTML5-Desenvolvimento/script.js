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
            animations: { opacity: 1},
          },
          {
            id: "#i01",
            duration: 25000,
            delayBefore: 0,
            delayAfter: 0,
            animations: { scale: [1.25,1] },
          },
        ],
      ];
      var confettiAnim = new WAnimation(confettiDrop, {
        loop: false,
        clearAfterEnd: false,
      });
      confettiAnim.startAnimation();
    },
  },
  [
    {
      id: "#i02",
      duration: 750,
      delayBefore: 400,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i03",
      duration: 750,
      delayBefore: 600,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
  [
        {
      id: "#i02",
      duration: 750,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top:"-44px" },
    },
        {
      id: "#i04",
      duration: 750,
      delayBefore: 750,
      delayAfter: 4000,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top:0 },
    },
  ],
];
new WAnimation(animations, {
  loop: false,
  clearAfterEnd: false,
}).startAnimation();
