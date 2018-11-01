export default function (Vue) {
  Vue.directive('listener-event', {
    bind: function (el, binding, vnode) {
      if (!(typeof binding.value === 'function')) return;
      el.addEventListener(binding.arg, (event) => {
        binding.value(event)
      })
    }
  })
  Vue.directive('touch-event', {
    bind: function (el, binding, vnode) {
      if (!(typeof binding.value === 'function')) return;
      let p = {
        endTime: 0
      }
      el.addEventListener('touchstart', (event) => {
        let e = event.changedTouches[0];
        if (!e) return;
        p.startTime = event.timeStamp;
        p.startX = e.clientX;
        p.startY = e.clientY;
        p.type = 'start'
        binding.value(position(p))
      }, false)
      el.addEventListener('touchmove', (event) => {
        let e = event.changedTouches[0];
        if (!e) return;
        p.endTime = event.timeStamp;
        p.x = e.clientX;
        p.y = e.clientY;
        p.type = 'move'
        binding.value(position(p))
        p.startX = e.clientX;
        p.startY = e.clientY;
      }, false)
      el.addEventListener('touchend', (event) => {
        let e = event.changedTouches[0];
        if (!e) return;
        p.endTime = event.timeStamp;
        p.type = 'end'
        binding.value(position(p))
      }, false)
    }
  })
}

function position(p) {
  let time = parseInt(p.endTime - p.startTime)
  let _y = p.y - p.startY
  let _x = p.x - p.startX
  return {
    type: p.type,
    time,
    position: {
      x: _x,
      y: _y
    }
  }
}
