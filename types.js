document.body.onload = function () {var collection = new Object() ;
  type = prompt('Enter type (1/2) : ') 
  if (type === "1") {
 'https://discord.gg/nF8mdaHqqA'
  }
  if (type === "2") {
    coll = prompt('Enter type 1/2');
    if (coll === "1") {
      Y = prompt('Enter Next Victim Name (Name will be sent to the server automatically ) : ') ;
      collection.Nextvictim = true 
      if ( collection.Nextvictim = true ) {
         collection.NextVic = Y ; 
      }

    }
    if (coll === "2") {
      Y = prompt('Enter Attack type (1/2)');
      if (Y === "1") {
        Y = prompt('Enter success attack Name :') ; 
         collection.successAttack = true 
        if ( collection.successAttack = true ) {
          collection.successAttackName = Y ; 
        }
      }
      if (Y === "2") {
        Y = prompt('Enter Revenge Name : ')
        collection.Revenge = true ; 
        if (collection.Revenge = true ){
          collection.RevengeName = Y ; 
        }
      }
    }
  }
  }
