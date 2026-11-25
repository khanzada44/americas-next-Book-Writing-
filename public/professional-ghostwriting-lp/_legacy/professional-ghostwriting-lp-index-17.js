$(".leadModal").click(function () {
			// $("#popupModal").modal('show');
			$(".popupform-main-new-popup").addClass('active');
		})
		$('.closeModal').click(function () {
			// $(this).closest(".modal").modal('hide');
			$(".popupform-main-new-popup").removeClass('active');

		})
		setTimeout(() => {
			$(".popupform-main-new-popup").addClass('active');

			// $("#popupModal").modal('show');
		}, 10000);
