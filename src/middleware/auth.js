import jwt_decode from "jwt-decode"

const decodeToken = (token) => {
    return jwt_decode(token)
}
export { decodeToken }
