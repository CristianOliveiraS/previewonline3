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
      id: "#i01-1",
      duration: 750,
      delayBefore: 400,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
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
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i04",
      duration: 750,
      delayBefore: 700,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i05",
      duration: 750,
      delayBefore: 800,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i06",
      duration: 750,
      delayBefore: 900,
      delayAfter: 5000,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
];
new WAnimation(animations, {
  loop: false,
  clearAfterEnd: false,
}).startAnimation();
