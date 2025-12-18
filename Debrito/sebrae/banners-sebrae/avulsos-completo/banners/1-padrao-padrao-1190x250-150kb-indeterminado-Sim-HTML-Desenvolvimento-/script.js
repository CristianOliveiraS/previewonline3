var animations = [
  [
    {
      id: "#i01",
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      animations: { opacity: 1 },
    },
    {
      id: "#i01-1",
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i02",
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i03",
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i04",
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i05",
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
    {
      id: "#i06",
      duration: 650,
      delayBefore: 850,
      delayAfter: 3500,
      easing: "easeOutCubic",
      animations: { opacity: 1, top: 0, left: 0 },
    },
  ],
];
new WAnimation(animations, {
  loop: true,
  clearAfterEnd: false,
}).startAnimation();
