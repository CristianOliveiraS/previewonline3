var animations = [
  [
    {
      id: "#i01",
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i02",
      duration: 750,
      delayBefore: 400,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
  [
    {
      id: "#i03",
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i04",
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i05",
      duration: 650,
      delayBefore: 650,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
  [
    {
      id: "#i06",
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i07",
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i08",
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
    {
      id: "#i09",
      duration: 650,
      delayBefore: 650,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: { opacity: 1, left: 0, top: 0 },
    },
  ],
];
new WAnimation(animations, {
  loop: true,
  clearAfterEnd: false,
}).startAnimation();
