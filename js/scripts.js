
var showingProduct = false;

function showProject(productSelectedId){


	var item = [];
		item = $.grep(items, function(item){
			return item.id == productSelectedId;
		});

		$('#product-type').html(item[0].type);
		$('#products').html('');

		item[0].products.forEach(function(product){
			    $('#products').append(''+
				
				'<hr class="primary">' +

                '<div class="row"> ' +
                '    <div class="col-xs-12 text-center"> ' +
                '        <h2>'+product.name+'</h2> ' +
                '    </div> ' +
                '</div> ' +

             
                '<div class="row">' +
                '    <div id="img-col" class="col-xs-10 col-xs-offset-1 col-lg-4 col-lg-offset-4">' + 
                		'<a href="'+product.images[0]+'">' +
                			'<div class="row mt-20"><img class="product-img" src="'+product.images[0]+'"></div>'+
                		'</a>' +
                '    </div>' +
                '</div>' +

                '<div class="row">' +
                '    <div class="col-xs-10 col-xs-offset-1 text-center">' +
                '        <p><h4 class="mt-20" >'+product.description+'</h4></p>' +  
                '        <p><h3 class="mt-20" >'+product.dimensions+'</h3></p>' +  
                '        <p> '+
                			'<h3 id="product-link">'+
                			'<a href="'+product.link+'"> <i class="fa fa-shopping-cart sr-icons"></i> Comprar</a>'+
                			'</h3>'+
                		'</p>' +  
                '    </div>' +
                '</div>'); 

        });
		
}

function hideProduct(){

		
}


$(document).ready(function() {

	$(".category-text").hide();
	$(".sub-category-text").hide();


	$(".link-category" ).click(function() { 
	 		
	 	$(".category-text").slideUp(slideSpeed);
	 	$(".sub-category-text").slideUp(slideSpeed);
	 	$(this).next().slideDown(slideSpeed);

	});	

	$(".link-sub-category" ).click(function() { 
	 		
		$(".sub-category-text").slideUp(slideSpeed);

	 	$(this).next().slideDown(slideSpeed);
	});	

	$(".symbol-close" ).click(function() { 

		hideProduct();
		 		
	});

	$(".product" ).click(function() { 

		showingProduct = true;
	 		
		var id = $(this).attr('id');
		
		showProject(id);
	    
	 		
	});	

	



});