function myPicture(pic) {

		var getAddress = {

			address: "assets/images/",

		  	fileType: ".jpg",

		  	fullAddress: function(){
		  		return this.address + pic + this.fileType; 

		  	}

		}

		x = getAddress.fullAddress();

	    document.getElementById("myImg").src = x;

		}