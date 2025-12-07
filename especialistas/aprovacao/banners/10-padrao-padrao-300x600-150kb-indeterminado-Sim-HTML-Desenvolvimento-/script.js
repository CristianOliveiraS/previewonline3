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
            animations: { opacity: 1 },
          },
          {
            id: "#i01",
            duration: 15050,
            delayBefore: 0,
            delayAfter: 0,
            animations: { scale: [1.25, 1] },
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
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i03",
      duration: 750,
      delayBefore: 750,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
  [
    {
      id: "#i04",
      duration: 250,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i05",
      duration: 550,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i06",
      duration: 550,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i07",
      duration: 750,
      delayBefore: 650,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
  [
    {
      id: "#i07",
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 0, top: 0, left: 0 },
    },
  ],
  [
    {
      id: "#i08",
      duration: 750,
      delayBefore: 250,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
  [
    {
      id: "#i09",
      duration: 250,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i10",
      duration: 550,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i11",
      duration: 550,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i12",
      duration: 750,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i13",
      duration: 750,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i14",
      duration: 750,
      delayBefore: 850,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
];
new WAnimation(animations, {
  loop: true,
  clearAfterEnd: false,
}).startAnimation();
