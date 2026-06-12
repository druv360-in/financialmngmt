import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Edit_family from "./Edit_family";
import { MdOutlineSearch } from "react-icons/md";

// --- STYLED COMPONENTS ---

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh; 
  background-color: rgb(255, 255, 255); 
  box-sizing: border-box;
  padding: 40px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 975px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;

  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    color: rgb(120, 120, 120);
  }
`;

const SearchInput = styled.input`
  background-color: rgb(241, 241, 241);
  width: 100%;
  height: 28px;
  border: none;
  border-radius: 6px;
  padding-left: 40px;
  padding-right: 15px;
  outline: none;
  font-size: 12px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 11px;
    color: rgb(120, 120, 120);
  }
`;

const LedgerInnerBox = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 1px solid rgb(219, 219, 219);
  padding: 25px;
  box-sizing: border-box;
  overflow-x: auto; /* Gracefully handles smaller viewports */
`;

const LedgerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  thead th {
    padding: 12px 16px;
    background-color: rgb(249, 249, 249);
    font-size: 11px;
    font-weight: 600;
    color: rgb(0, 0, 0);
    border-bottom: 1px solid rgb(235, 235, 235);
  }

  tbody td {
    padding: 12px 16px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: 400;
    border-bottom: 1px solid rgb(235, 235, 235);
  }

  /* Target specific elements by className for unique looks */
  .family-name {
    font-weight: 600;
    font-size: 13px;
  }
`;

const ActionButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ViewButton = styled.button`
  width: 100px;
  height: 28px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  background-color: rgb(209, 249, 230);
  color: rgb(5, 150, 105);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const EditButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  background-color: rgb(216, 232, 252);
  color: rgb(37, 99, 235);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const DeleteButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: rgb(249, 223, 225);
  color: rgb(225, 29, 72);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;


// --- COMPONENT LOGIC ---

function Ledger_format_table() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedFamily, setSelectedFamily] = useState(null);
  const navigate = useNavigate();

  // Get data from localStorage
  const families = JSON.parse(localStorage.getItem("families")) || [];

  const deleteFamily = (id) => {
    const updatedFamilies = families.filter((family) => family.id !== id);
    localStorage.setItem("families", JSON.stringify(updatedFamilies));
    // Soft UI refresh instead of a hard browser reload
    window.location.reload();
  };

  // Filter data based on search input
  const filteredFamilies = families.filter(
    (family) =>
      family.familyName?.toLowerCase().includes(search.toLowerCase()) ||
      family.headOfFamily?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageContainer>
      <ContentWrapper>
        
        {/* Search Bar Block */}
        <SearchBarContainer>
          <i className="fa-solid fa-magnifying-glass search-icon"><MdOutlineSearch /></i>
          <SearchInput
            type="text"
            placeholder="Search families by name or head of family..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBarContainer>

        {/* Core Table Grid Block */}
        <LedgerInnerBox>
          <LedgerTable>
            <thead>
              <tr>
                <th>SL No</th>
                <th>Family Name</th>
                <th>Head of Family</th>
                <th>Phone Number</th>
                <th>Monthly Collection</th>
                <th>Members</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredFamilies.map((family, index) => (
                <tr key={family.id || index}>
                  <td>{index + 1}</td>
                  <td className="family-name">{family.familyName}</td>
                  <td>{family.headOfFamily}</td>
                  <td>{family.phone}</td>
                  <td>{family.amount}</td>
                  <td>{family.members?.length || 0}</td>
                  <td>
                    <ActionButtonGroup>
                      <ViewButton
                        onClick={() => navigate("/viewfamily", { state: { family } })}
                      >
                        <MdOutlineRemoveRedEye />
                        <span>View Details</span>
                      </ViewButton>

                      <EditButton
                        onClick={() => {
                          setSelectedFamily(family);
                          setShowEditModal(true);
                        }}
                      >
                        <FaPencilAlt />
                      </EditButton>

                      <DeleteButton onClick={() => deleteFamily(family.id)}>
                        <RiDeleteBin6Line />
                      </DeleteButton>
                    </ActionButtonGroup>
                  </td>
                </tr>
              ))}
              {filteredFamilies.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", color: "#888" }}>
                    No families found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </LedgerTable>
        </LedgerInnerBox>

      </ContentWrapper>

      {/* Conditional rendering of Edit Family Modal */}
      {showEditModal && (
        <Edit_family
          closeModal={() => setShowEditModal(false)}
          familyData={selectedFamily}
        />
      )}
    </PageContainer>
  );
}

export default Ledger_format_table;