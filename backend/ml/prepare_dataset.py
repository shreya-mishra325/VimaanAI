import pandas as pd

RAW_PATH = "../data/raw/US_flight_delays.csv"
CLEAN_PATH = "../data/processed/flight_delay_clean.csv"

COLUMNS_TO_KEEP = [
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

print("Loading raw dataset...")

df = pd.read_csv(
    RAW_PATH,
    encoding="latin1",
    low_memory=False
)

print("Raw shape:", df.shape)

df = df[COLUMNS_TO_KEEP]

df = df.dropna()

print("After cleaning shape:", df.shape)

df = df.rename(columns={
    "Reporting_Airline": "airline",
    "Origin": "origin",
    "Dest": "destination",
    "CRSDepTime": "scheduled_departure",
    "CRSArrTime": "scheduled_arrival",
    "ArrDelayMinutes": "arrival_delay_minutes"
})

df.to_csv(CLEAN_PATH, index=False)

print(f"Clean dataset saved to {CLEAN_PATH}")
