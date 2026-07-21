import "dotenv/config";

export const envConfig = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
};





const requiredEnvVars = ["MONGO_URI","JWT_SECRET"];

for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
        throw new Error(`Environment variable ${varName} is not set`);
    }
}
