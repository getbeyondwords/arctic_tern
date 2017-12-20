      /* Hook up the Talkie integration to our map */
      var tl = TalkieLeaflet(map);

      /* Talkie timeline config */
      var timeline = Talkie.timeline("#song", {
        "00:18": tl.setView([40.7298, -74.0027], 13), // New York city
        "00:22": tl.setView([42.8963, -78.8822], 12), // Buffalo
        "00:26": tl.setView([-41.112, -188.767], 6),  // New Zealand
        "00:29": tl.setView([42.8963, -78.8822], 12), // Buffalo
        "00:32": tl.setView([42.44, -79.33], 17)      // Fredonia
      });

      // Tell TalkieLeaflet that we want to revert user changes to the map view
      //
      // If we don’t call this, then the scripted setViews will still work but
      // user changes will not pause the timeline or be reverted.
       tl.undoViewChanges(timeline);