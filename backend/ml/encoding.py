import pandas as pd

df = pd.read_csv("../data/processed/flight_delay_features.csv")

print("Original shape:", df.shape)

df = df.sample(n=500000, random_state=42)
print("After sampling shape:", df.shape)

top_origins = df["origin"].value_counts().nlargest(25).index
top_destinations = df["destination"].value_counts().nlargest(25).index

df["origin"] = df["origin"].apply(lambda x: x if x in top_origins else "OTHER")
df["destination"] = df["destination"].apply(lambda x: x if x in top_destinations else "OTHER")

df = pd.get_dummies(
    df,
    columns=["airline", "origin", "destination"],
    drop_first=True
)

print("After encoding shape:", df.shape)

df.to_csv("../data/processed/flight_delay_encoded.csv", index=False)

print("\nEncoded dataset saved.")
