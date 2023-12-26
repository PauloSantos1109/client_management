-- CreateTable
CREATE TABLE "employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "employee" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "registrationDate" DATETIME NOT NULL,
    "office" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "os_tickt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "osNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "registrationDate" DATETIME NOT NULL,
    "status" BOOLEAN NOT NULL,
    "clientId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "clientName" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    CONSTRAINT "os_tickt_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "os_tickt_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "os_tickt_osNumber_key" ON "os_tickt"("osNumber");
