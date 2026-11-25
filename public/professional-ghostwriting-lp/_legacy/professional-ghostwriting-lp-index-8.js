jQuery(document).ready(function ($) {
			var cartQuantity = jQuery('.ast-edd-site-header-cart-wrap .count'),
				iconQuantity = jQuery('.ast-edd-site-header-cart-wrap .astra-icon'),
				cartTotalAmount = jQuery('.ast-edd-site-header-cart-wrap .ast-edd-header-cart-total');
			jQuery('body').on('edd_cart_item_added', function (event, response) {
				cartQuantity.html(response.cart_quantity);
				iconQuantity.attr('data-cart-total', response.cart_quantity);
				cartTotalAmount.html(response.total)
			});
			jQuery('body').on('edd_cart_item_removed', function (event, response) {
				cartQuantity.html(response.cart_quantity);
				iconQuantity.attr('data-cart-total', response.cart_quantity);
				cartTotalAmount.html(response.total)
			})
		})
