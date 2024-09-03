"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { inventoryData } from "../../../../../utils/Inventorydata";
import ViewInventory from "@/app/components/inventory/ViewInventoryTable";
import CategoryList from "@/app/components/inventory/CategoryList";
import { useSearchParams } from "next/navigation";
import Filter from "@/app/components/inventory/Filter";
import InventoryService from "@/services/InventoryService";

export default function Page() {
  const searchParams = useSearchParams();

  console.log("Here", searchParams.get("newInventory"));
  // const [records, setRecords] = useState(jsonData);

  const [activeTab, setActiveTab] = useState("all");
  const [eventData, setEventData] = useState(null);
  const [eventCount, setEventCount] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [activeButton, setActiveButton] = useState("All");
  const [activeCategory, setActiveCategory] = useState(null);
  const [filterClicked, setFilterClicked] = useState(false);
  // const [filteredData, setFilteredData] = useState(null);
  const [newInventory, setNewInventory] = useState(false);

  useEffect(() => {
    if (searchParams.get("newInventory") === "success") {
      setNewInventory(true);
    }
  }, []);

  useEffect(() => {
    if (newInventory) {
      setTimeout(() => {
        setNewInventory(false);
      }, 3000);
    }
  }, [newInventory]);

  useEffect(() => {
    async function fetchData() {
      if (true) {
        console.log(inventoryData);
        const data = await InventoryService.inventories();

        if (data.success) {
          console.log("Data", data);
          const successData = data.success;
          setEventData(successData);
          setEventCount(successData.length);
          setFilteredData(successData);
        } else {
          console.log("Error fetching data");
        }
      }
    }
    fetchData();
  }, [activeTab]);

  const handleSearch = (value) => {
    setSearchText(value);
    filterTableData(value);
    document.getElementById("my_modal_2").close();
  };

  const filterTableData = (search) => {
    if (!search) {
      setFilteredData(eventData);
      return;
    }

    const filtered = eventData.filter((event) => {
      console.log("E", event);
      const eventName = event.category.toLowerCase();
      console.log("Event name", eventName);
      const rT = eventName.includes(search.toLowerCase());
      console.log("Rt", rT);
      return eventName.includes(search.toLowerCase());
    });

    console.log("Filtered", filtered);
    setFilteredData(filtered);
  };

  let filtered;

  if (eventData) {
    console.log("Git here");
    console.log("Event data is", eventData);
    filtered = eventData.filter((item) => {
      if (activeTab === "all") {
        return item.minimumAlert === true;
      } else if (activeTab === "alerted") {
        console.log("Yea");
        console.log(item.quantityalert === "alerted");
        return item.minimumAlert === true;
      }
      // else if (activeTab === "inactiveEvents") {
      //   return item.isPublic === true;
      // } else if (activeTab === "pastEvents") {
      //   return item.isPublic === true;
      // } else {
      //   return item.isPublic === true;
      // }
    });
  }

  const handleButtonClick = (buttonName) => {
    console.log("Button clicked");
    // setActiveButton(buttonName);
  };

  const limitAlerts = inventoryData.filter(
    (row) => row.quantityalert === "alerted"
  );

  const filterData = (category) => {
    if (category) {
      return inventoryData.filter((row) => row.category === category);
    }
  };

  const handleFilter = () => {
    if (filterClicked === false) {
      setFilterClicked(true);
    } else if (filterClicked === true) {
      setFilterClicked(false);
    }
  };

  const handleCategory = (category) => {
    // setFilteredData(filterData(category));
    // setActiveCategory(category.toLowerCase());
    // setFilterClicked(false);

    handleSearch(category);
  };

  return (
    <>
      <div className="px-8">
        {newInventory && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your inventory has been added!</span>
          </div>
        )}
        <section className="border-2 w-[80vw] h-[80vh] border-zinc-400 rounded-2xl mt-10 p-6 overflow-scroll">
          <div className="flex items-center justify-between p-3">
            <ul className="border bg-primary bg-opacity-30 text-white p-2 rounded-full">
              <div className="flex justify-between space-x-2">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`${
                    activeTab === "all"
                      ? "bg-primary rounded-full px-10 py-3"
                      : "px-10 py-3"
                  }
                  transition-all duration-300 ease-linear`}
                >
                  All
                </button>

                <button
                  onClick={() => setActiveTab("alerted")}
                  className={`${
                    activeTab === "alerted"
                      ? "bg-primary rounded-full px-10 py-3"
                      : "px-10 py-3"
                  }
                transition-all duration-300 ease-linear`}
                >
                  Limit Alerts
                </button>
              </div>
            </ul>

            <div
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="flex justify-between align-center gap-5
        border border-primary rounded-full py-1 px-7 text-primary hover:bg-primary hover:text-white"
            >
              <Image
                priority
                src="/images/inventory/filter.svg"
                alt="filter icon"
                width="24"
                height="24"
              />
              <button>Filter</button>
            </div>
          </div>

          <Filter handleCategory={handleCategory} />

          {eventData ? (
            <ViewInventory data={filteredData} />
          ) : (
            <div className="h-3/4 w-full flex justify-center content-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}

          {/* {eventData ? (
            <Tabs
              defaultActiveKey="allEvents"
              activeKey={activeTab}
              onChange={(key) => setActiveTab(key)}
            >
              <TabPane tab="All events" key="allEvents">
                <Table columns={columns} dataSource={filteredData} />
              </TabPane>
            </Tabs>
          ) : (
            <Spin tip="Loading...">
              <Alert
                message="Event"
                description="Fetching events"
                type="info"
              />
            </Spin>
          )} */}
        </section>
      </div>
    </>
  );
}
