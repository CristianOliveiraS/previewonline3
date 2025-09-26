var animations = [
  [
    {
      id: '#i01',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i02',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i03',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i03',
      duration: 15000,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:"-7%", top:0, scale:[1.25,1]}
    },  
    {
      id: '#i04',
      duration: 750,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },    
    {
      id: '#i05',
      duration: 750,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },    
    {
      id: '#i05-1',
      duration: 750,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },    
    {
      id: '#i05-2',
      duration: 750,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },    
    {
      id: '#i05-3',
      duration: 750,
      delayBefore: 950,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },    
    {
      id: '#i05-4',
      duration: 750,
      delayBefore: 1050,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },    
  ],
  [
  {
      id: '#i06',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
  },
  {
      id: '#i07',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  {
      id: '#i08',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  {
      id: '#i08-1',
      duration: 750,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  {
      id: '#i08-2',
      duration: 750,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  {
      id: '#i08-3',
      duration: 750,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  {
      id: '#i08-4',
      duration: 750,
      delayBefore: 850,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
  [
  {
      id: '#i08-4',
      duration: 750,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:"20%", top:0}
    },
  {
      id: '#i08-3',
      duration: 750,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:"20%", top:0}
    },
  {
      id: '#i08-2',
      duration: 750,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:"20%", top:0}
    },
  {
      id: '#i08-1',
      duration: 750,
      delayBefore: 300,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:"20%", top:0}
    },
  {
      id: '#i08',
      duration: 750,
      delayBefore: 400,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:"20%", top:0}
    },
  {
      id: '#i07',
      duration: 750,
      delayBefore: 500,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0, top:0}
    },
  ],
  [
  {
      id: '#i09',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  {
      id: '#i11',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  {
      id: '#i10',
      duration: 750,
      delayBefore: 550,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      