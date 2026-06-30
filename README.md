# Bike Rental Wallet and Credits System

This local project uses Node.js, Express.js, EJS, local JSON files, and Bootstrap.

## Local JSON Data

The app stores data in:

- `backend/data/users.json`
- `backend/data/wallets.json`
- `backend/data/wallet_transactions.json`

## Local Setup

1. Install required npm packages:

```bash
npm install
```

2. Optional: copy `.env.example` to `.env` if you want to change `PORT` or `SESSION_SECRET`.

3. Start the app:

```bash
npm start
```

4. Open:

```text
http://localhost:3000
```

## Local Testing Steps

1. Login with `alice@example.com`.
2. Open `/wallet` and confirm the wallet balance is shown.
3. Open `/wallet/topup`, enter `10`, and submit.
4. Confirm the wallet balance increases and a Top Up transaction appears.
5. Open `/wallet/pass` and buy a Single Trip.
6. Confirm `$2.00` is deducted and a Single Trip transaction appears.
7. Buy a Day Pass and confirm `$10.00` is deducted.
8. Try buying when the wallet balance is too low.
9. Open `/wallet/history` and confirm transactions are newest first, with type, amount, balance after, date/time, and status.

You can reset sample data by editing the JSON files in `backend/data`.

## Wallet Routes

- `GET /wallet`
- `GET /wallet/topup`
- `POST /wallet/topup`
- `GET /wallet/pass`
- `POST /wallet/pass`
- `GET /wallet/history`
