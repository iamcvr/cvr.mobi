function loadWorks(max, min,populateID) {
var workList = document.getElementById(populateID);
var id;
  for(id=max; id >= min; id--) {
    var stringID = id.toString();
        workList.innerHTML += '<img id="'+stringID+'" onclick="openK(this.id)" src=works/thumbs/'+stringID+'.jpg class="imgWorks"/>';
  };
};
