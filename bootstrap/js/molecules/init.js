var mol2Ds = [];
    var mol3Ds = [];
    function initMols()
    {
      var elems = document.getElementsByClassName('Mol2D');
      for (var i = 0, l = elems.length; i < l; ++i)
      {
        var elem = elems[i];
        mol2Ds.push(elem.id);
      }
      var elems = document.getElementsByClassName('Mol3D');
      for (var i = 0, l = elems.length; i < l; ++i)
      {
        var elem = elems[i];
        mol3Ds.push(elem.id);
      }
    }
    function initMolList(is3D)
    {
      var maxRows = 10;
      var mols = is3D? mol3Ds: mol2Ds;
      var elemId = is3D? 'listMol3D': 'listMol2D';

      var elemList = document.getElementById(elemId);
      Kekule.DomUtils.clearChildContent(elemList);
      for (var i = 0, l = mols.length; i < l; ++i)
      {
        var id = mols[i];
        var elemItem = document.createElement('option');
        elemItem.setAttribute('value', id);
        var caption = id;
        if (id.endsWith('3D'))
          caption = id.substr(0, id.length - 2);
        Kekule.DomUtils.setElementText(elemItem, caption);
        elemList.appendChild(elemItem);
      }

      var viewerId = is3D? 'chemViewer3D': 'chemViewer2D';
      var viewer = Kekule.Widget.getWidgetById(viewerId); //document.getElementById(viewerId);
      elemList.onchange = function(e)
      {
        var id = elemList.value;
        if (id)
        {
          //viewer.setAttribute('data-chem-obj', 'url(#' + id + ')');
          var resStr = 'url(#' + id + ')';
          Kekule.PredefinedResReferer.loadResource(resStr, function(resInfo, success)
          {
            if (success)
            {
              var chemObj = Kekule.IO.loadTypedData(resInfo.data, resInfo.resType, resInfo.resUri);
              viewer.setChemObj(chemObj);
            }
          }, null, document);
        }
      };
    }

    function init()
    {
      initMols();
      initMolList(false);
      initMolList(true);
    }

  //   $(document).ready(function () {

  //     $('#sidebarCollapse').on('click', function () {
  //         $('#sidebar').toggleClass('active');
  //     });
  
  // });