import pandas as pd

df = pd.read_csv("../data/processed/flight_delay_clean.csv")

print("Original shape:", df.shape)

df["departure_hour"] = df["scheduled_departure"] // 100
df["arrival_hour"] = df["scheduled_arrival"] // 100
df["is_weekend"] = df["DayOfWeek"].apply(lambda x: 1 if x in [6, 7] else 0)

df = df.drop(columns=["scheduled_departure", "scheduled_arrival"])

print("After feature engineering shape:", df.shape)

print("\nSample rows:")
print(df.head())

df.to_csv("../data/processed/flight_delay_features.csv", index=False)

print("\nFeature dataset saved!")
