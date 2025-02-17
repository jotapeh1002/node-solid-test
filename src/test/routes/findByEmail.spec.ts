import { StatusCodes } from "http-status-codes"

describe("finder user by email route test", () => {
    it("findByEmail", async () => {
        const body = {
            email: "q0q7A@example10.com"
        }
        
        const response = fetch("http://localhost:3333/findByEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        expect((await response).status).toBe(StatusCodes.OK)

    })
})