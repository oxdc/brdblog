export function loadTheme (theme) {
  document.body.className = 'theme-' + theme
}

export function getSize () {
  var w = window
  var d = document
  var e = d.documentElement
  var g = d.getElementsByTagName('body')[0]
  var x = w.innerWidth || e.clientWidth || g.clientWidth
  var y = w.innerHeight || e.clientHeight || g.clientHeight
  return {
    width: x,
    height: y
  }
}

export function getSelectionCoords (win) {
  win = win || window
  var doc = win.document
  var sel = doc.selection
  var range
  var rects
  var rect
  var x = 0
  var y = 0
  if (sel) {
    if (sel.type !== 'Control') {
      range = sel.createRange()
      range.collapse(true)
      x = range.boundingLeft
      y = range.boundingTop
    }
  } else if (win.getSelection) {
    sel = win.getSelection()
    if (sel.rangeCount) {
      range = sel.getRangeAt(0).cloneRange()
      if (range.getClientRects) {
        range.collapse(true)
        rects = range.getClientRects()
        if (rects.length > 0) {
          rect = rects[0]
        }
        x = rect ? rect.left : 0
        y = rect ? rect.top : 0
      }
      // Fall back to inserting a temporary element
      if (x === 0 && y === 0) {
        var span = doc.createElement('span')
        if (span.getClientRects) {
          // Ensure span has dimensions and position by
          // adding a zero-width space character
          span.appendChild(doc.createTextNode('\u200b'))
          range.insertNode(span)
          rect = span.getClientRects()[0]
          x = rect ? rect.left : 0
          y = rect ? rect.top : 0
          var spanParent = span.parentNode
          spanParent.removeChild(span)

          // Glue any broken text nodes back together
          spanParent.normalize()
        }
      }
    }
  }
  return {
    x: x,
    y: y
  }
}

export function loadJson(file, callback) {
  var rawFile = new XMLHttpRequest()
  rawFile.overrideMimeType('application/json')
  rawFile.open('GET', file, true)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText)
    }
  }
  rawFile.send(null)
}

export function loadBrdnote(file, callback) {
  var rawFile = new XMLHttpRequest()
  rawFile.overrideMimeType('application/text')
  rawFile.open('GET', file, true)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText)
    }
  }
  rawFile.send(null)
}

export function invertColor(hexTripletColor) {
  var color = hexTripletColor
  color = color.substring(1)
  color = parseInt(color, 16)
  color = 0xFFFFFF ^ color
  color = color.toString(16)
  color = ("000000" + color).slice(-6)
  color = "#" + color
  return color
}

// ucs-2 string to base64 encoded ascii
export function utoa(str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

// base64 encoded ascii to ucs-2 string
export function atou(str) {
  return decodeURIComponent(escape(window.atob(str)))
}

export function extractHostname(url) {
  var hostname

  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }

  //find & remove port number
  hostname = hostname.split(':')[0]
  //find & remove "?"
  hostname = hostname.split('?')[0]

  return hostname;
}

export function extractRootDomain(url) {
  var domain = extractHostname(url)
  var splitArr = domain.split('.')
  var arrLen = splitArr.length

  if (arrLen > 2) {
    domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1]
    //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
    if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
      //this is using a ccTLD
      domain = splitArr[arrLen - 3] + '.' + domain
    }
  }

  return domain
}

export default {
  loadTheme,
  getSize,
  getSelectionCoords,
  loadJson,
  loadBrdnote,
  invertColor,
  utoa,
  atou,
  extractHostname,
  extractRootDomain
}
