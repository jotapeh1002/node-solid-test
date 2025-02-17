import { StatusCodes } from "http-status-codes"

describe("Create User", () => {
    it("should be able to create a new user", async () => {
        const body = {
            name: "John Doe",
            email: "q0q7A@example52.com",
            password: "125545"
        }
        
        const response = fetch("http://localhost:3333/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        expect((await response).status).toBe(StatusCodes.CREATED)

    })
})