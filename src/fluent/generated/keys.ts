import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '0bdbf4644de742be82d4d7d1dc69f2dc'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '268238bd1bb2443e91fc169cbf1f66af'
                    }
                    '': {
                        table: 'x_1234_keydemo_category'
                        id: 'df303478e168402d8b91f64beaf62dbc'
                    }
                }
            }
        }
    }
}
