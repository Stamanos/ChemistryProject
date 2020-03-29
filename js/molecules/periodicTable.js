function $w(id)
{
	return Kekule.Widget.getWidgetById(id);
};
function updateOptions()
{
	var table = $w('periοdicTable');
	$w('checkBoxMiniMode').setChecked(table.getUseMiniMode());
	$w('checkBoxEnableSelect').setChecked(table.getEnableSelect());
	$w('checkBoxEnableMultiSelect').setChecked(table.getEnableMultiSelect());
	var comps = table.getDisplayedComponents();
	$w('checkBoxShowGroupHead').setChecked(comps.indexOf('groupHead') >= 0);
	$w('checkBoxShowPeriodHead').setChecked(comps.indexOf('periodHead') >= 0);
	$w('checkBoxShowLegend').setChecked(comps.indexOf('legend') >= 0);
	$w('checkBoxShowSymbol').setChecked(comps.indexOf('symbol') >= 0);
	$w('checkBoxShowName').setChecked(comps.indexOf('name') >= 0);
	$w('checkBoxShowAtomicNum').setChecked(comps.indexOf('atomicNumber') >= 0);
	$w('checkBoxShowAtomicWeight').setChecked(comps.indexOf('atomicWeight') >= 0);
};
function applyOptions()
{
	var table = $w('periοdicTable');
	table.setUseMiniMode($w('checkBoxMiniMode').getChecked());
	table.setEnableSelect($w('checkBoxEnableSelect').getChecked());
	table.setEnableMultiSelect($w('checkBoxEnableMultiSelect').getChecked());
	var comps = [];
	if ($w('checkBoxShowGroupHead').getChecked())
		comps.push('groupHead');
		if ($w('checkBoxShowPeriodHead').getChecked())
		comps.push('periodHead');
		if ($w('checkBoxShowLegend').getChecked())
		comps.push('legend');
		if ($w('checkBoxShowSymbol').getChecked())
		comps.push('symbol');
		if ($w('checkBoxShowName').getChecked())
		comps.push('name');
		if ($w('checkBoxShowAtomicNum').getChecked())
		comps.push('atomicNumber');
		if ($w('checkBoxShowAtomicWeight').getChecked())
		comps.push('atomicWeight');
		table.setDisplayedComponents(comps);
	};
function reportSelectedElements()
{
	var table = $w('periοdicTable');
	var elems = table.getSelectedSymbols();
	var sElems = (elems && elems.length)? elems.join(', '): '(none)';
	alert('Element selected: ' + sElems);
};
function init()
{
	updateOptions();
	$w('btnSelectedElement').addEventListener('execute', reportSelectedElements);
	var optionRootElem = document.getElementById('widgetOptions');
	Kekule.Widget.globalManager.addEventListener('valueChange', function(e){
		var target = e.widget;
		if (target)
		{
			var elem = target.getElement && target.getElement();
			if (Kekule.DomUtils.isDescendantOf(elem, optionRootElem))
			applyOptions();
		}
	});
}
Kekule.X.domReady(init);