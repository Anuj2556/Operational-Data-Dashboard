const records = [
  {
    id: '1',
    title: 'Warehouse inventory sync',
    owner: 'Operations',
    status: 'In Progress',
    priority: 'High',
    updatedAt: '2026-10-01',
    description: 'Synchronize inventory data across warehouse systems.',
  },
  {
    id: '2',
    title: 'Customer export validation',
    owner: 'Data Quality',
    status: 'Completed',
    priority: 'Medium',
    updatedAt: '2026-09-30',
    description: 'Validate the latest customer data export.',
  },
  {
    id: '3',
    title: 'Payment reconciliation',
    owner: 'Finance',
    status: 'Blocked',
    priority: 'Critical',
    updatedAt: '2026-09-29',
    description: 'Resolve mismatched payment transactions.',
  },
]

function wait(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}

export async function fetchRecords({shouldFail=false}={}){
    await wait(100)

    if(shouldFail){
        throw new Error('Unable to load records')
    }
    return records
}

export async function fetchRecordById(id,{shouldFail=false}={}){
    await wait(500)

    if(shouldFail){
        throw new Error('Unable to load records')
    }
    const record=records.find((item)=>item.id===id)

    if(!record){
        throw new Error ('Record Not Found')
    }
    return record
}