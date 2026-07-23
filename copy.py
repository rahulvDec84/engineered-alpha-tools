import shutil
from pathlib import Path

# ===============================
# Source folders
# ===============================
SOURCE_JSON = Path("/home/rahul/StockDashboard/data")
SOURCE_CHARTS = Path("/home/rahul/StockDashboard/charts")

# ===============================
# GitHub repository folders
# ===============================
GITHUB_REPO = Path("/home/rahul/engineered-alpha-tools")
DEST_JSON = GITHUB_REPO / "data"
DEST_CHARTS = GITHUB_REPO / "charts"

DEST_JSON.mkdir(exist_ok=True)
DEST_CHARTS.mkdir(exist_ok=True)

# -------------------------------
# Copy JSON files
# -------------------------------
for file in SOURCE_JSON.glob("*.json"):
    shutil.copy2(file, DEST_JSON / file.name)

# -------------------------------
# Copy PNG chart images
# -------------------------------
for file in SOURCE_CHARTS.glob("*.png"):
    shutil.copy2(file, DEST_CHARTS / file.name)

print("✅ JSON files copied.")
print("✅ Chart images copied.")
