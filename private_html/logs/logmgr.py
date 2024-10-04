from datetime import datetime

def iso_to_date(iso: str) -> datetime:
    return datetime.fromisoformat(iso)

# get all of the lines from the log file
lines = []
def read() -> list[str]:
    with open('log.log', 'r') as log:
        lines = log.readlines()
    return lines

def get_ip(line: str) -> str:
    ip = line.split(' || ')[1].split('::')[1].split(':')[1].rstrip().lstrip()
    return ip

def get_time(line: str) -> datetime:
    time = line.split(' || ')[0]
    # turn ISO string into date
    date = iso_to_date(time)
    return date

def get_url(line: str) -> str:
    url = line.split(' >> ')[1].rstrip().lstrip()
    return url

def filter_ip(lines: list[str], ip: str) -> list[str]:
    filtered = []
    for line in lines:
        if get_ip(line) == ip:
            filtered.append(line)
    return filtered

def filter_time(lines: list[str], time: datetime) -> list[str]:
    filtered = []
    for line in lines:
        if iso_to_date(get_time(line)) == time:
            filtered.append(line)
    return filtered

def filter_url(lines: list[str], url: str) -> list[str]:
    filtered = []
    for line in lines:
        if get_url(line) == url:
            filtered.append(line)
    return filtered

def filter_time_range(lines: list[str], start: datetime, end: datetime) -> list[str]:
    filtered = []
    
    for line in lines:
        date = iso_to_date(get_time(line))
        if date >= start and date <= end:
            filtered.append(line)    
    return filtered

# write CLI
print('Welcome to the log manager!')
print('Please enter a command. Type "help" for a list of commands.')
lines = read()
while True:
    inputcmd = input('LOGMGR> ')
    args = inputcmd.split(' ')
    if args[0] == 'read':
        lines = read()
        print('Read log file.')
    elif args[0] == 'filter':
        if args[1] == 'ip':
            ip = args[2]
            lines = filter_ip(lines, ip)
            print('Filtered by IP.')
        elif args[1] == 'time':
            time = iso_to_date(args[2])
            lines = filter_time(lines, time)
            print('Filtered by time.')
        elif args[1] == 'time_range':
            start = iso_to_date(args[2])
            end = iso_to_date(args[3])
            lines = filter_time_range(lines, start, end)
            print('Filtered by time range.')
        elif args[1] == 'url':
            url = args[2]
            lines = filter_url(lines, url)
            print('Filtered by URL.')
        else:
            print('Invalid filter type.')
        print(f'Filtered to {len(lines)} lines.')
    elif args[0] == 'print':
        lines_crop = lines if args[1] == "*" else lines[int(args[1]):int(args[2])]
        for line in lines_crop:
            print(line)
    elif args[0] == 'print_part':
        fail = False
        lines_crop = lines
        if args[2] == "*": lines_crop = lines
        else: lines_crop = lines[int(args[2]):int(args[3])]
        
        for line in lines_crop:
            val = line
            if args[1] == "ip":
                val = get_ip(line)
            elif args[1] == "time":
                val = get_time(line)
            elif args[1] == "url":
                val = get_url(line)
            else:
                fail = True
            
            print( "Invalid filter type." if fail else val)
    elif args[0] == "help":
        print("""
        "read" - reads the log file
        "filter ip <ip>" - filters by IP
        "filter time <time>" - filters by time
        "filter time_range <<start> <end> | *>" - filters by time range
        "filter url <url>" - filters by URL
        "print <start> <end>" - prints lines from start to end
        "print_part <ip|time|url> <<start> <end> | *>" - prints the specified part of the lines from start to end
        "help" - prints this help message
        """)
    else:
        print('Invalid command.')