const { Router } = require( "express" );

const {
    getPalillos,
    putPalillos,
    postPalillos,
    deletePalillos } = require( "../controllers/palillos.controler" );

const router = Router();

router.get( '/', getPalillos );
router.post( '/', postPalillos );
router.put( '/', putPalillos );
router.delete( '/', deletePalillos );

// Export

module.exports = router;