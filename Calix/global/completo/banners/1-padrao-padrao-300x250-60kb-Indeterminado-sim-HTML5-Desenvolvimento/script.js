var animations = [
  [ 
    {
        id: '#i01',
        duration: 250,
        delayBefore: 250,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i02',
        duration: 650,
        delayBefore: 450,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i03',
        duration: 650,
        delayBefore: 550,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i04',
        duration: 650,
        delayBefore: 650,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i05',
        duration: 650,
        delayBefore: 750,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i06',
        duration: 650,
        delayBefore: 850,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i07',
        duration: 650,
        delayBefore: 950,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
  ],
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      