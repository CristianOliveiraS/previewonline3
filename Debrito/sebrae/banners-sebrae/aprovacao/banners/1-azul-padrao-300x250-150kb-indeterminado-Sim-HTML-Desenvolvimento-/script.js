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
            duration: 9000,
            delayBefore: 0,
            delayAfter: 0,
            animations: { scale: [1.25, 1] },
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
      id: "#i02",
      duration: 650,
      delayBefore: 250,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
  [
    {
      id: "#i03",
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      animations: { opacity: 1 },
    },
    {
      id: "#i04",
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i05",
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i06",
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i07",
      duration: 650,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i08",
      duration: 650,
      delayBefore: 950,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
  [
    {
      id: "#i09",
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      animations: { opacity: 1 },
    },
    {
      id: "#i10",
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i11",
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i12",
      duration: 650,
      delayBefore: 650,
      delayAfter: 4500,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
  [
    {
      id: "#i13",
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      animations: { opacity: 1 },
    },
    {
      id: "#i14",
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i15",
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i16",
      duration: 650,
      delayBefore: 750,
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
