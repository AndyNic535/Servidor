const { Router } = require( "express" );

const {
    getAccesorios,
    putAccesorios,
    postAccesorios,
    deleteAccesorios } = require( "../controllers/accesorios.controler" );

const router = Router();

router.get( '/', getAccesorios );
router.post( '/', postAccesorios );
router.put( '/', putAccesorios );
router.delete( '/', deleteAccesorios );

// Export

module.exports = router;