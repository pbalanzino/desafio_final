import jwt from 'jsonwebtoken'

export const adminToken = (req, res, next) => {
  try {
    const adminToken = jwt.sign(
      {
        id: 1,
        name: 'Admin',
        email: 'admin@admin.com',
        role: 'admin'
      },
      process.env.API_SECRET,
      { expiresIn: '1h' }
    )
    res.send({ adminToken })
  } catch (error) {
    error.status = 500
    return next(error)
  }
}
