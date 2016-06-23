/**
 * This file is compatible with DDA/IAB
 * This file is used in IAB only
 *
 * GoogleDCSClick
 */

function Clicktag(){
    document.getElementById('clickarea').addEventListener('click', this.onExit, false);
}


Clicktag.prototype.onExit = function(){
    Enabler.exit('EXIT');
};