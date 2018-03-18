const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
	res.json({
		data: [
			{
				title:'Sistema de matricula fuera de servicio'
			},
			{
				title:'El problema de transporte en panama'
			},
		],
	});
});


module.exports = router;