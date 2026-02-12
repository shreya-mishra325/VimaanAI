import pandas as pd

DATA_PATH = "../data/raw/US_flight_delays.csv"
OUTPUT_PATH = "../data/processed/flight_delay_clean.csv"

USEFUL_COLS = [
    "Month",
    "DayOfWeek",
    "Reporting_Airline",
    "Origin",
    "Dest",
    "CRSDepTime",
    "CRSArrTime",
    "Distance",
    "ArrDelayMinutes"
]

print("Loading dataset...")

df = pd.read_csv(
    DATA_PATH,
    encoding="latin1",
    low_memory=False
)

print("Dataset loaded")

print("\nFiltering useful columns...")

df = df[USEFUL_COLS]

print("Remaining columns:")
print(df.columns.tolist())

print("\nDropping rows with missing values...")

df = df.dropna()

print("Remaining rows:", len(df))

print("\nArrDelayMinutes summary:")
print(df["ArrDelayMinutes"].describe())

print("\nSample rows:")
print(df.head())

print("\nSaving cleaned dataset...")

df.to_csv(OUTPUT_PATH, index=False)

print(f"Clean dataset saved to: {OUTPUT_PATH}")
