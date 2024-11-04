import { recipients } from './recipients.js';

function findRecipient() {
  const ptrID = document.getElementById("ptrID").value;
  if (/^\d{4,6}$/.test(ptrID)) {
    const recipient = recipients[ptrID] || "不明な相手";
    document.getElementById("recipientMessage").innerText = `あなたがプレゼントを渡す相手は${recipient}さんです！`;
  } else {
    alert("PTRIDを入力してください。");
  }
}