import * as functions from "firebase-functions";



export const echo = functions
	.https.onRequest(async (req, res) => {
			res.send(req.body);
	});
