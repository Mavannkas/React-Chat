import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
	res.redirect('https://http://localhost:3000/')
})

export default router
