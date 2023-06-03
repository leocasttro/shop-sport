import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzBhNGMyNmYzYTRiZDNlMjc2OTUxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTUzMzM3MCwiZXhwIjoxNjg1NzkyNTcwfQ.ttM1Sred51z2RsycXtF1kCNHSVBfneqIg_Bdii6SpXU';

export const plubicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});

