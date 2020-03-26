var productKeys = {};
    var keyResUrls = [
      '#product1', '#product2', '#product3', '#product4', '#product5'
    ];
    var viewerAnswerIds = ['viewerProduct1', 'viewerProduct2', 'viewerProduct3', 'viewerProduct4', 'viewerProduct5'];
    var viewerKeyIds = ['viewerKey1', 'viewerKey2', 'viewerKey3', 'viewerKey4', 'viewerKey5'];
    function loadKeys()
    {
      for (var i = 0, l = keyResUrls.length; i < l; ++i)
      {
        var ks = Kekule.ArrayUtils.toArray(keyResUrls[i]);
        for (var j = 0, k = ks.length; j < k; ++j)
        {
          var id = ks[j];
          var resUrl = 'url(' + id + ')';
          Kekule.PredefinedResReferer.loadResource(resUrl, function(resInfo, success)
          {
            if (success)
            {
              var chemObj = Kekule.IO.loadTypedData(resInfo.data, resInfo.resType, resInfo.resUri);
              productKeys[resInfo.resUri] = chemObj;
            }
          }, null, document);
        }
      }
    };
    function prepareViewers()
    {
      for (var i = 0; i < viewerAnswerIds.length; ++i)
      {
        var viewerId = viewerAnswerIds[i];
        var viewer = Kekule.Widget.getWidgetById(viewerId);
        var mol = new Kekule.Molecule();
        //mol.createCtab();
        viewer.setChemObj(mol);
      }
    };
    function compareAnswers()
    {
      var score = 0;
      for (var i = 0; i < viewerAnswerIds.length; ++i)
      {
        var correct = compareAnswer(i);
        if (correct)
          ++score;
      }
      return score;
    };
    function compareAnswer(index)
    {
      var viewerId = viewerAnswerIds[index];
      var viewer;
      if (DataType.isArrayValue(viewerId))
      {
        viewer = [];
        for (var i = 0, l = viewerId.length; i < l; ++i)
        {
          viewer[i] = Kekule.Widget.getWidgetById(viewerId[i]);
        }
      }
      else
        viewer = Kekule.Widget.getWidgetById(viewerId);

      // compare
      var keyUrl = keyResUrls[index];
      var keyObj = productKeys[keyUrl];
      var answerObj = viewer.getChemObj();
      var result = answerObj? answerObj.isSameStructureWith(keyObj): false;
      var elemId = 'resultMark' + (index + 1);
      var resultElem = document.getElementById(elemId);
      var rclassName = result? 'Correct': 'Wrong';
      resultElem.className = 'ResultMark' + ' ' + rclassName;
      return result;
    };

    function checkAnswers()
    {
        var score = compareAnswers();
        var count = keyResUrls.length;
        var elemResultSummary = document.getElementById('resultSummary');
        elemResultSummary.innerHTML = '' + score + '/' + count;
    }
    function toggleKeys()
    {
			setTimeout((function() {
        var visible = Kekule.Widget.getWidgetById('btnToggleKeys').getChecked();
        for (var i = 0, l = viewerKeyIds.length; i < l; ++i)
        {
            var elem = document.getElementById(viewerKeyIds[i]);
            if (visible)
                elem.style.visibility = 'visible';
            else
                elem.style.visibility = 'hidden';
        }
			}), 10);
    }

    function init()
    {
      loadKeys();
      prepareViewers();
      Kekule.Widget.getWidgetById('btnToggleKeys').addEventListener('execute', toggleKeys);
      Kekule.Widget.getWidgetById('btnCheckAnswers').addEventListener('execute', checkAnswers);
    }

    Kekule.X.domReady(init);