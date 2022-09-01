jest.mock("axios");
const testData={
    "customer": [
        {
            "id": 7,
            "name": "a",
            "email": "as@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T11:42:14+05:30"
        },
        {
            "id": 22,
            "name": "Aa",
            "email": "fadsl@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-09-01T10:28:46+05:30"
        },
        {
            "id": 21,
            "name": "Aa",
            "email": "12@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T23:32:22+05:30"
        },
        {
            "id": 20,
            "name": "AA",
            "email": "afjl@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T23:31:36+05:30"
        },
        {
            "id": 11,
            "name": "Aa",
            "email": "as@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T23:27:28+05:30"
        },
        {
            "id": 6,
            "name": "Aa",
            "email": "aj@gamil.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T11:41:21+05:30"
        },
        {
            "id": 5,
            "name": "apoorv",
            "email": "afd@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T11:13:10+05:30"
        },
        {
            "id": 8,
            "name": "apoorv",
            "email": "as@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T23:26:53+05:30"
        },
        {
            "id": 9,
            "name": "apoorv",
            "email": "r@gamil.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T23:27:04+05:30"
        },
        {
            "id": 10,
            "name": "apoorv",
            "email": "apoorv@gmail.com",
            "phone_number": "1234567890",
            "created_at": "2022-08-30T23:27:15+05:30"
        }
    ],
    "total_rows": 22
};
axios.get.mockImplementation((url) => {
  switch (url) {
    case "/customer/customerList?page=1":
      return Promise.resolve(testData);
    
  }
});

test("should fetch users", () => {
  const payload = {
    sort_key: "name",
    sort_value: "ASC",
  };
  return axios
    .post("/customer/customerList?page=1", JSON.stringify(payload))
    .then((response) => expect(response.data).toEqual(testData));
  
});

