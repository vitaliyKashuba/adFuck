function getElementByAttribute(attr, value, root) {
    root = root || document.body;
    if(root.hasAttribute(attr) && root.getAttribute(attr) == value) {
        return root;
    }
    var children = root.children,
        element;
    for(var i = children.length; i--; ) {
        element = getElementByAttribute(attr, value, children[i]);
        if(element) {
            return element;
        }
    }
    return null;
}

function addClass(attr, value, root) {
    root = root || document.body;
    if(root.hasAttribute(attr) && root.getAttribute(attr).includes(value)) {
        root.classList.add("feed-unit");
    }
    var children = root.children,
        element;
    for(var i = children.length; i--; ) {
        element = addClass(attr, value, children[i]);
        if(element) {
            return element;
        }
    }
    return null;
}

function addClassesToFeedUnits() {
  addClass('data-pagelet', 'FeedUnit', document.body)
}

function findAds() {
  var feeds = document.getElementsByClassName('feed-unit')

  for(var i = 0; i< feeds.length; i++) {
    var element = getElementByAttribute('aria-label', 'Реклама', feeds[i]);
    if (element != null) {
      feeds[i].classList.add("fucking-ad")
    }
  }
}

function removeAds() {
  var ads = document.getElementsByClassName('fucking-ad');

  for (var i = 0; i < ads.length; i++) {
    ads[i].remove();
  }
}

function adFuck() {
  addClassesToFeedUnits();
  findAds();
  removeAds();
}
